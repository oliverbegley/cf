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

export default class AddFact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddFactHelp: false,
      showAddFactGuidelines: false,
      title: "",
      subject: "",
      descripion: ""
    };
  }

  toggleShowHelpAddFact() {
    this.setState({ showAddFactHelp: !this.state.showAddFactHelp });
  }

  toggleShowAddFactGuidelines() {
    this.setState({ showAddFactGuidelines: !this.state.showAddFactGuidelines });
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

  render() {
    return (
      <Jumbotron style={{ margin: "20px" }}>
        <Container>
          <Form>
            <Row>
              <Col sm="8" md="11">
                <h1>Add Fact</h1>
              </Col>
              <Col sm="4" md="1">
                <img
                  src="https://img.icons8.com/flat_round/50/000000/question-mark.png"
                  title="Help"
                  style={{ height: "30px", cursor: "pointer" }}
                  onClick={() => this.toggleShowHelpAddFact()}
                />
              </Col>
            </Row>
            {this.state.showAddFactHelp ? (
              <Row>
                <Alert color="info">
                  <p>HELP help HElp</p>
                </Alert>
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
                  />
                </FormGroup>
              </Col>
              <FormGroup>
                <Label for="subject">Subject</Label>
                <Input type="select" name="subject" id="subject">
                  <option>business</option>
                  <option>enviornment</option>
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
                  <Input type="textarea" name="description" id="description" />
                </FormGroup>
              </Col>
            </Row>
            {!this.state.showAddFactGuidelines ? (
              <Row>
                <Col>
                  <Button
                    onClick={() => this.toggleShowAddFactGuidelines()}
                    color="info"
                  >
                    Show Guidelines
                  </Button>
                </Col>
              </Row>
            ) : null}
            {this.state.showAddFactGuidelines ? (
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
                            Refer to the terms and conditions for more information 
                          </li>
                        </ol>
                      </Col>
                      <Col xl="1">
                        <Button
                          onClick={() => this.toggleShowAddFactGuidelines()}
                          color="info"
                        >
                          hide
                        </Button>
                      </Col>
                    </Row>
                  </Alert>
                </Col>
              </Row>
            ) : null}
            <br />
            <Row>
              <Col>
                <Button color="primary">Add Fact</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Jumbotron>
    );
  }
}
