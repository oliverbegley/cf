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

import close from "../../../public/assets/img/close.png";

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
                    border: "7px solid grey",
                    borderRadius: "30px",
                    height: "100%",
                    overflow: "hidden"
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
                  <Link to={{ pathname: "/searchresults", search:"?query"+this.state.query}}>
                    <Button
                      color="primary"
                      style={{ height: "100%" }}
                    >
                      Search
                    </Button>
                    </Link>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </Col>
            <Col sm="2">
              <img
                src="https://img.icons8.com/flat_round/50/000000/question-mark.png"
                title="Help"
                style={{ marginTop: "30px", height: "30px", cursor: "pointer" }}
                onClick={() => this.operation()}
              />
            </Col>
          </FormGroup>
        </Form>
        {this.state.showHelp ? (
          <Alert color="info">
            <Row>
              <Col xl='11'>
              <p>
              Get started by signing up, logging in or search facts that have
              been verified. Search for a word or phrase you would like to find
              out more about
            </p>
              </Col>
              <Col xl='1'>
              <img src={close} style={{height: "30px", cursor: "pointer"}} onClick={()=>this.operation()}/>
              </Col>
            </Row>
          </Alert>
        ) : null}
        <hr />
        <Row>
          <Col xs="12" md="8">
            <h2>Browse by Topic</h2>
            <TopicDashboard />
          </Col>
          <Col xs="12" md="4">
            <h2>Recent Posts</h2>
            <FactList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
