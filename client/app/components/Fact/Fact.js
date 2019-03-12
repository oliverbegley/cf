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
  Form
} from "reactstrap";

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
        color: "black"
      }}
    >
      <Row>
        <Col sm="2">{props.evidence.user}</Col>
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
          {props.evidence.supporting ? (
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
    this.onChangeAddEvidenceComment = this.onChangeAddEvidenceComment.bind(this);
    this.onChangeAddEvidenceSupporting = this.onChangeAddEvidenceSupporting.bind(this);
    this.state = {
      fact: {},
      allEvidence: [{}],
      addEvidenceTitle: "",
      addEvidenceURL: "",
      addEvidenceComment: "",
      isLoading: false,
      showAddEvidence: false,
      addEvidenceSupporting: false
    };
  }

  toggleShowAddEvidence() {
    this.setState({ showAddEvidence: !this.state.showAddEvidence });
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

  onClickAddEvidence(){
  }
  

  componentDidMount() {
    fetch("http://localhost:8080/api/fact/5c852032dd5e4e4a29ab820f")
      .then(res => res.json())
      .then(json => {
        this.setState({
          fact: json,
          allEvidence: json.evidence
        });
      });
  }

  render() {

    const {
      isLoading,
      addEvidenceTitle,
      addEvidenceURL,
      addEvidenceComment,
      addEvidenceSupporting
    } = this.state;

    if (isLoading) {
      return <div>Not just yet chief</div>;
    }

    if (!isLoading) {
      return (
        <div>
          <Jumbotron style={{ margin: "20px" }}>
            <Container>
              <Row>
                <h1>
                  {this.state.fact.title}
                  <Badge
                    color="warning"
                    style={{ margin: "0px 10px 0px 10px" }}
                  >
                    {this.state.fact.subject}
                  </Badge>
                </h1>
              </Row>
              <Row>
                <i>Posted on : {this.state.fact.creationDate}</i>
              </Row>
              <hr />
              <Row style={{ color: "grey" }} />
              <Row>
                <Col xs="2">
                  <b>Description: </b>
                </Col>
                <Col xs="7">{this.state.fact.description}</Col>
                <Col xs="3">
                  <Button outline color="success">
                    +
                  </Button>
                  <span style={{ margin: "0px 10px 0px 10px" }} />
                  <Button outline color="danger">
                    -
                  </Button>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <h4>Evidence</h4>
                </Col>
                <Col>
                  {!this.state.showAddEvidence ? (
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
                              onClick={() => this.toggleShowAddEvidence()}
                            >
                              X
                            </Button>
                          </div>
                        </div>
                      </Col>
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
                              type="email"
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
                              name="select"
                              id="exampleSelect"
                              style={{ width: "200px" }}
                              onChange={this.onChangeAddEvidenceSupporting}
                              value={addEvidenceSupporting}
                            >
                              <option>Supporting</option>
                              <option>Opposing</option>
                              <option>unsure</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col>
                          <Button
                            style={{
                              position: "absolute",
                              bottom: "0",
                              right: "0"
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
