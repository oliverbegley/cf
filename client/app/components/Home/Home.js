import React from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroup
} from "reactstrap";

import SearchResults from "../App/SearchResults/SearchResults";
import FactList from "./FactList";
import TopicDashboard from "./TopicDashboard";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.state = {
      query: "",
      isLoading: false,
      facts: [],
      showHelp: false
    };
  }

  onSearch() {
    console.log("this.state", this.state);
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    console.log("helo");
    fetch("/api/fact/facts")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          facts: data,
          query: ""
        });
      })
      .catch(err => {
        // Do something for an error here
      });
    console.log(this.state);
  }

  operation() {
    this.setState({ showHelp: !this.state.showHelp });
  }
  render() {
    const { query, facts, isLoading } = this.state;

    if (isLoading) {
      return (
        <h3>
          Loading Results for <u>{this.state.query}</u>
        </h3>
      );
    }

    return (
      <Container style={{ marginTop: "10px" }}>
        <Form>
          <FormGroup row>
            <Col sm="2" />
            <Col>
              <div>
                <InputGroup
                  style={{
                    margin: "10px",
                    border:'4px solid grey',
                    borderRadius:'30px 10px',
                    height: "100%",
                    overflow:'hidden'
                  }}
                >
                  <Input
                    style={{ fontSize: "35px" }}
                    type="search"
                    name="search"
                    id="search"
                    placeholder="search a fact here..."
                    value={this.state.query}
                    onChange={event => {
                      this.setState({ query: event.target.value });
                    }}
                  />
                  <InputGroupAddon addonType="prepend">
                    <Button
                      color="primary"
                      onClick={this.onSearch}
                      style={{ height: "100%"
                    }}
                    >
                      Search
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </Col>
            <Col sm="2">
              <img
                src="https://img.icons8.com/flat_round/50/000000/question-mark.png"
                title="this will be displayed as a tooltip"
                style={{ marginTop: "30px", height: "30px" }}
                onClick={() => this.operation()}
              />
            </Col>
          </FormGroup>
        </Form>
        {this.state.showHelp ? (
            <Alert color="info">
              <p>
                Get started by signing up, logging in or search facts that have
                been verified. Search for a word or phrase you would like to
                find out more about
              </p>
            </Alert>
        ) : null}
        <hr />
        <Row>
          <Col xs="8">
            <h2>Browse by Topic</h2>
            <TopicDashboard />
          </Col>
          <Col xs="4">
            <h2>Recent Posts</h2>
            <FactList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
