import React from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Button
} from "reactstrap";
import { getFromStorage } from "../../utils/storage.js";

export default class AddFact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddFactHelp: false,
      title: "",
      subject: "",
      description: "",
      addFactError: "",
      isLoggedIn: false
    };

    this.onTextboxChangeTitle = this.onTextboxChangeTitle.bind(this);

    this.onSelectChangeSubject = this.onSelectChangeSubject.bind(this);

    this.onTextboxChangeDescription = this.onTextboxChangeDescription.bind(
      this
    );

    this.onAddFact = this.onAddFact.bind(this);
  }

  toggleShowHelpAddFact() {
    this.setState({ showAddFactHelp: !this.state.showAddFactHelp });
  }

  onTextboxChangeTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  onSelectChangeSubject(event) {
    this.setState({
      subject: event.target.value
    });
  }

  onTextboxChangeDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  closeErrorMessage() {
    this.setState({ addFactError: "" });
  }

  onAddFact() {
    //Grab state
    const { title, subject, description } = this.state;
    //send
    fetch("/api/fact/facts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        subject: subject,
        userId: "123",
        description: description
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            isLoading: false
          });
        } else {
          this.setState({
            addFactError: json.message
          });
        }
      });
  }

  componentDidMount() {
    const obj = getFromStorage("the_main_app");
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch("/api/account/verify?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            console.log("success");
            this.setState({isLoggedIn: true})
          } else {
            console.log("failure");
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    const {
      title,
      subject,
      description,
      addFactError,
      isLoggedIn
    } = this.state;

    if(isLoggedIn)
    return (
      
      <Jumbotron style={{ margin: "70px", marginBottom:'150px' }}>
        <Container>
          <Form>
            {this.state.addFactError ? (
              <div>
                <Row>
                  <Col>
                    <Alert color="danger" style={{ height: "100%" }}>
                      {addFactError}{" "}
                      <Button
                        color="danger"
                        style={{ float: "right" }}
                        onClick={() => this.closeErrorMessage()}
                      >
                        X
                      </Button>
                    </Alert>
                  </Col>
                </Row>
                <br />
              </div>
            ) : null}
            <Row>
              <Col sm="8" md="11">
                <h1>Add Fact</h1>
              </Col>
              <Col sm="4" md="1">
                {!this.state.showAddFactHelp ? (
                  <img
                    src="https://img.icons8.com/flat_round/50/000000/question-mark.png"
                    title="Help"
                    style={{ height: "30px", cursor: "pointer" }}
                    onClick={() => this.toggleShowHelpAddFact()}
                  />
                ) : null}
              </Col>
            </Row>
            {this.state.showAddFactHelp ? (
              <Row>
                <Col>
                  <Alert color="info">
                    <Row>
                      <Col xl="11">
                        <h2>Community Guidelines</h2>
                        <ol type="i">
                          <li>Title should be concise and descriptive</li>
                          <li>
                            Research existing posts before posting to see if
                            there is any existing content that may provide you
                            with some answers
                          </li>
                          <li>
                            Use impartial language to remove potential biases
                          </li>
                          <li>
                            Refer to the terms and conditions for more
                            information
                          </li>
                        </ol>
                      </Col>
                      <Col xl="1">
                        <Button
                          color="info"
                          onClick={() => this.toggleShowHelpAddFact()}
                        >
                          X
                        </Button>
                      </Col>
                    </Row>
                  </Alert>
                </Col>
              </Row>
            ) : null}
            <Row>
              <Col>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter fact to be checked"
                    onChange={this.onTextboxChangeTitle}
                    value={title}
                  />
                </FormGroup>
              </Col>
              <FormGroup>
                <Label for="subject">Subject</Label>
                <Input
                  type="select"
                  name="subject"
                  id="subject"
                  onChange={this.onSelectChangeSubject}
                  value={subject}
                >
                  <option>business</option>
                  <option>environment</option>
                  <option>politics</option>
                  <option>science</option>
                  <option>sport</option>
                  <option>technology</option>
                  <option>other</option>
                </Input>
              </FormGroup>
              <Col />
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="description">Add a description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    onChange={this.onTextboxChangeDescription}
                    value={description}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col>
                <Button
                  color="primary"
                  onClick={this.onAddFact}
                  style={{ float: "right" }}
                >
                  <h4>Add Fact</h4>
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Jumbotron>
    )
    return(
      <Jumbotron>
        Please Log in to continue
      </Jumbotron>
    )
  }
}
