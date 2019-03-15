import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Badge, Button, Container, Row, Col } from "reactstrap";
const queryString = require("query-string");

const FactRow = props => (
  <Jumbotron style={{ padding: "2rem 2rem" }}>
    <Row>
      <Col lg="11">
        <h4>{props.fact.title}</h4>
      </Col>
      <Col lg="1">
        <Badge color="warning" pill style={{ float: "right" }}>
          {props.fact.subject}
        </Badge>
      </Col>
    </Row>
    <Row>
      <Col>
        <i>Posted on: {props.fact.creationDate.substring(0, 10)}</i>
      </Col>
    </Row>
    <Row>
      <Col>{props.fact.description}</Col>
    </Row>
    <Row>
      <Col>
        <Link to={"/fact/" + props.fact._id}>
          <Button color="primary" style={{ width: "100px", float: "right" }}>
            view
          </Button>
        </Link>
      </Col>
    </Row>
  </Jumbotron>
);

function FactTable(props) {
  const factRows = props.facts.map(fact => (
    <FactRow key={fact._id} fact={fact} />
  ));
  return <div>{factRows}</div>;
}

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      searchString: "",
      subject: "",
      facts: []
    };
  }

  componentDidMount() {
    const parsedQuery = queryString.parse(location.search);
    this.setState({searchString: parsedQuery.searchstring, subject: parsedQuery.subject});
    fetch("/api/fact/?subject=" + parsedQuery.subject +"&searchstring="+ parsedQuery.searchstring)
      .then(response => response.json())
      .then(facts => this.setState({ facts }));
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading  } = this.state;

    if (isLoading) {
      return (
        <div style={{ height: "100%" }}>
          <Jumbotron
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <h2>Loading Search Results</h2>
          </Jumbotron>
        </div>
      );
    }

    return (
      <Container>
        <Row>
          <h1>Showing results for <i>{this.state.searchString}{this.state.subject}</i></h1>
        </Row>
        <hr />
        {this.state.facts.length === 0?
        (
          <h3>no results available</h3>
        ):
        (<FactTable facts={this.state.facts} />)
        }
        
      </Container>
    );
  }
}

export default SearchResults;
