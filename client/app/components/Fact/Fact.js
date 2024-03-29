import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Badge,
  Card,
  FormGroup,
  Label,
  Input,
  Form,
  Alert
} from "reactstrap";
import { Link } from "react-router-dom";
import { getFromStorage } from "../../utils/storage.js";
import loading from "../../../public/assets/gif/loading.gif";

var getLocation = function(href) {
  var l = document.createElement("a");
  l.href = href;
  return l;
};

const EvidenceRow = props => (
  <Row style={{ marginBottom: "10px" }}>
    <Card
      style={{
        width: "100%",
        height: "100%",
        padding: "5px",
        backgroundColor: "DB2929",
        color: "black",
        boxShadow: '7px 7px 5px grey'
      }}
    >
      <Row>
        <Col sm="2"><Link to={"/profile/"+props.evidence.user}> view poster</Link></Col>
        <Col>
          <h4>{props.evidence.title}</h4>
        </Col>
        <Col>
          Source:{" "}
          <a href={props.evidence.url} target="_blank">
            {getLocation(props.evidence.url).hostname.replace(/^www\./, "")}{" "}
            <img src="https://img.icons8.com/office/16/000000/ok.png" />
          </a>
        </Col>

        <Col sm="2">
          {props.evidence.supporting === "supporting" ? (
            <Badge color="success" pill>
              supporting
            </Badge>
          ) : (
            <Badge color="danger" pill>
              opposing
            </Badge>
          )}
        </Col>
      </Row>
      <Row>
        <Col>{props.evidence.comment}</Col>
      </Row>
    </Card>
  </Row>
);

function EvidenceTable(props) {
  const evidenceRows = props.allEvidence.map(evidence => (
    <EvidenceRow key={evidence._id} evidence={evidence} />
  ));
  return <div>{evidenceRows}</div>;
}

class Fact extends Component {
  constructor(props) {
    super(props);
    this.toggleShowAddEvidence = this.toggleShowAddEvidence.bind(this);
    this.onChangeAddEvidenceTitle = this.onChangeAddEvidenceTitle.bind(this);
    this.onChangeAddEvidenceURL = this.onChangeAddEvidenceURL.bind(this);
    this.onChangeAddEvidenceComment = this.onChangeAddEvidenceComment.bind(
      this
    );
    this.onChangeAddEvidenceSupporting = this.onChangeAddEvidenceSupporting.bind(
      this
    );
    this.onClickAddEvidence = this.onClickAddEvidence.bind(this);
    this.onClickUpvote = this.onClickUpvote.bind(this);
    this.onClickDownvote = this.onClickDownvote.bind(this);
    this.onClickRemoveVote = this.onClickRemoveVote.bind(this);
    this.onVote = this.onVote.bind(this);

    this.state = {
      factId: this.props.match.params.factid,
      fact: {},
      allEvidence: [{}],
      addEvidenceTitle: "",
      addEvidenceURL: "",
      addEvidenceComment: "",
      addEvidenceSupporting: "",
      addEvidenceError: "",
      userId: "",
      isLoading: true,
      isLoggedIn: false,
      showAddEvidence: false,
      showAddEvidenceHelp: false,
      voteMessage: "",
      vote: ""
    };
  }

  toggleShowAddEvidence() {
    this.setState({ showAddEvidence: !this.state.showAddEvidence });
  }

  toggleShowAddEvidenceHelp() {
    this.setState({ showAddEvidenceHelp: !this.state.showAddEvidenceHelp });
  }

  onChangeAddEvidenceTitle(event) {
    this.setState({
      addEvidenceTitle: event.target.value
    });
  }
  onChangeAddEvidenceURL(event) {
    this.setState({
      addEvidenceURL: event.target.value
    });
  }
  onChangeAddEvidenceComment(event) {
    this.setState({
      addEvidenceComment: event.target.value
    });
  }
  onChangeAddEvidenceSupporting(event) {
    this.setState({
      addEvidenceSupporting: event.target.value
    });
  }

  onClickAddEvidence() {
    //Grab state
    const {
      addEvidenceTitle,
      addEvidenceURL,
      addEvidenceComment,
      addEvidenceSupporting,
      userId,
      factId
    } = this.state;
    //send
    fetch("/api/fact/" + this.state.factId + "/evidence", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: addEvidenceTitle,
        url: addEvidenceURL,
        comment: addEvidenceComment,
        supporting: addEvidenceSupporting,
        user: userId
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            addEvidenceError: json.message
          });
        } else {
          this.setState({
            addEvidenceError: json.message
          });
        }
      });
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/fact/" + this.state.factId)
      .then(res => res.json())
      .then(json => {
        this.setState({
          fact: json,
          allEvidence: json.evidence,
          isLoading: false
        });
      });

    const obj = getFromStorage("the_main_app");
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch("/api/account/verify?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({ isLoggedIn: true, userId: json.userId });
          } else {
            this.setState({ isLoggedIn: false });
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  onVote() {
    this.setState({ isLoading: true });
    const obj = getFromStorage("the_main_app");
    var token = obj.token;
    fetch("/api/fact/" + this.state.factId + "/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        vote: this.state.vote,
        token: token
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({ isLoading: false, voteMessage: json.message });
          console.log(json);
        } else {
          this.setState({ isLoading: false });
          console.log(json);
        }
      });
  }

  onClickUpvote() {
    this.setState({ vote:"up"}, this.onVote);
  }
  
  onClickDownvote() {
    this.setState({ vote:"down"}, this.onVote);
  }

  onClickRemoveVote() {
    this.setState({ vote:""}, this.onVote);
  }

  render() {
    const {
      isLoading,
      addEvidenceTitle,
      addEvidenceURL,
      addEvidenceComment,
      addEvidenceSupporting,
      addEvidenceError,
      userId,
      isLoggedIn
    } = this.state;
    var dateobj = new Date(this.state.fact.creationDate);
    var B = dateobj.toString().substring(0, 15);

    if (isLoading) {
      return (
        <div>
          loading
          <img
            src={loading}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          />
        </div>
      );
    }

    if (!isLoading) {
      return (
        <div>
          <Jumbotron style={{ margin: "20px" }}>
            <Container>
              <Row>
                <h1>
                  {this.state.fact.title}
                  <Link
                    to={{
                      pathname: "/searchresults",
                      search: "?subject=" + this.state.fact.subject
                    }}
                  >
                    <Badge
                      color="warning"
                      style={{ margin: "0px 10px 0px 10px" }}
                    >
                      {this.state.fact.subject}
                    </Badge>
                  </Link>
                </h1>
              </Row>
              <Row>
                <i>Posted on : {B}</i>
              </Row>
              <hr />
              <Row style={{ color: "grey" }} />
              <Row>
                <Col xs="9">
                  <b>Description: </b>{this.state.fact.description}
                </Col>
                <Col xs="3">
                  <Row>
                    <Button
                      outline
                      color="success"
                      onClick={this.onClickUpvote}
                    >
                      +
                    </Button>
                    <Badge style={{ margin: "0px 10px 0px 10px" }}>
                      <h2>
                        {this.state.fact.upvoters.length -
                          this.state.fact.downvoters.length}
                      </h2>
                    </Badge>
                    <Button
                      outline
                      color="danger"
                      onClick={this.onClickDownvote}
                    >
                      -
                    </Button>
                  </Row>
                  <br />
                  <Row>
                    {!this.state.isLoggedIn ? (
                      <div style={{ float: "right" }}>
                        <Link to="/login">
                          <Button color="secondary">
                            You must be logged in to vote
                          </Button>
                        </Link>
                      </div>
                    ) : !this.state.showAddEvidence ? (
                      <div>
                        <div style={{ float: "right" }}>
                          {this.state.voteMessage ? (
                            <Alert> {this.state.voteMessage}</Alert>
                          ) : null}
                          <Button onClick={this.onClickRemoveVote}>remove vote</Button>
                        </div>
                      </div>
                    ) : null}
                  </Row>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <h2>Evidence</h2>
                </Col>
                <Col>
                  {!this.state.isLoggedIn ? (
                    <div style={{ float: "right" }}>
                      <Link to="/login">
                        <Button color="secondary">
                          You must be logged in to add evidence
                        </Button>
                      </Link>
                    </div>
                  ) : !this.state.showAddEvidence ? (
                    <div>
                      <div style={{ float: "right" }}>
                        <Button
                          color="primary"
                          onClick={() => this.toggleShowAddEvidence()}
                        >
                          + add evidence
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </Col>
              </Row>
              {this.state.showAddEvidence ? (
                <div
                  style={{
                    borderRadius: "10px",
                    padding: "25px 50px",
                    backgroundColor: "white"
                  }}
                >
                  <Container>
                    <Row>
                      <Col>
                        <h2>Add Evidence</h2>
                      </Col>
                      <Col>
                        <div>
                          <div style={{ float: "right" }}>
                            <Button
                              color="info"
                              style={{
                                marginRight: "30px"
                              }}
                              onClick={() => this.toggleShowAddEvidenceHelp()}
                            >
                              Help
                            </Button>
                            <Button
                              onClick={() => this.toggleShowAddEvidence()}
                            >
                              X
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      {this.state.addEvidenceError !== "" ? (
                        this.state.addEvidenceError === "success" ? (
                          <Row>
                            <Alert color="success">
                              {this.state.addEvidenceError}
                            </Alert>
                          </Row>
                        ) : (
                          <Row>
                            <Alert color="danger">
                              {this.state.addEvidenceError}
                            </Alert>
                          </Row>
                        )
                      ) : null}
                      {this.state.showAddEvidenceHelp ? (
                        <Row>
                          <Alert color="info">
                            <Row>
                              <Col>
                                <h3>Help Posting A Fact for Checking</h3>
                              </Col>
                              <Col>
                                <Button
                                  style={{
                                    float: "right",
                                    backgroundColor: "#0c5460",
                                    color: "#d1ecf1"
                                  }}
                                  onClick={() =>
                                    this.toggleShowAddEvidenceHelp()
                                  }
                                >
                                  X
                                </Button>
                              </Col>
                            </Row>
                            <ol type="i">
                              <li>Title should be concise and descriptive</li>
                              <li>URL should be of format xxxxx </li>
                              <li>Comment should be</li>
                              <li>
                                Supporting should be selected based on your
                                opinion Supporting should be selected based on
                                your opinion Supporting should be selected based
                                on your opinion
                              </li>
                            </ol>
                          </Alert>
                        </Row>
                      ) : null}
                    </Row>
                    <Form>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                              type="email"
                              name="title"
                              id="title"
                              placeholder="enter title"
                              onChange={this.onChangeAddEvidenceTitle}
                              value={addEvidenceTitle}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="url">URL</Label>
                            <Input
                              type="text"
                              name="url"
                              id="url"
                              placeholder="enter url"
                              onChange={this.onChangeAddEvidenceURL}
                              value={addEvidenceURL}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="comment">Comment</Label>
                            <Input
                              type="text"
                              name="comment"
                              id="comment"
                              placeholder="enter comment"
                              onChange={this.onChangeAddEvidenceComment}
                              value={addEvidenceComment}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="exampleSelect">
                              Supporting / Opposing
                            </Label>
                            <Input
                              type="select"
                              name="evidenceSupporting"
                              id="evidenceSupporting"
                              style={{ maxWidth: "200px" }}
                              onChange={this.onChangeAddEvidenceSupporting}
                              value={addEvidenceSupporting}
                            >
                              <option value="supporting">Supporting</option>
                              <option value="opposing">Opposing</option>
                              <option value="inconclusive">inconclusive</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col>
                          <Button
                            style={{
                              position: "absolute",
                              bottom: "0",
                              right: "0",
                              fontSize: "150%"
                            }}
                            color="primary"
                            onClick={this.onClickAddEvidence}
                          >
                            Add
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Container>
                </div>
              ) : null}
              <br />
              <EvidenceTable allEvidence={this.state.allEvidence} />
            </Container>
          </Jumbotron>
        </div>
      );
    }
  }
}

export default Fact;
