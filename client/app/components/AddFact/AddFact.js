import React from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class AddFact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Jumbotron style={{ margin: "20px" }}>
        <Container>
          <Form>
            <Row>
              <h1>Add Fact</h1>
            </Row>
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
                  <option>Business</option>
                  <option>Enviornment</option>
                  <option>Politics</option>
                  <option>Science</option>
                  <option>Sport</option>
                  <option>Technology</option>
                </Input>
              </FormGroup>
              <Col />
            </Row>
            <Row />
          </Form>
        </Container>
      </Jumbotron>
    );
  }
}
