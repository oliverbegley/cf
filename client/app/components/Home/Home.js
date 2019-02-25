import React from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron,
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

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.state = {
      query: "",
      isLoading: false,
      facts: []
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

  render() {
    const { query,facts, isLoading } = this.state;

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
            <InputGroup style={{ margin: "10px", borderRadius: "20px" }}>
              <Input
                type="search"
                name="search"
                id="search"
                placeholder="search here..."
                value={this.state.query}
                onChange={event => {
                  this.setState({ query: event.target.value });
                }}
              />
              <InputGroupAddon addonType="prepend">
                <Button color="primary" onClick={this.onSearch}>
                  Search
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
        <FactList/>
      </Container>
    );
  }
}

export default Home;
