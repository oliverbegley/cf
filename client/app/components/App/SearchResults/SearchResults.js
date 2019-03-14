import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Badge, Button, Container, Row, Col } from "reactstrap";

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
      <Col><i>Posted on: {props.fact.creationDate.substring(0,10)}</i></Col>
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
      query: this.props.location.search,
      facts: []
    };
  }

  componentDidMount() {
    fetch("/api/fact/recent/10")
      .then(response => response.json())
      .then(facts => this.setState({ facts }));
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading, query } = this.state;

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
          <h2>Showing results for {this.state.query}</h2>
        </Row>
        <hr />
        <FactTable facts={this.state.facts} />
      </Container>
    );
  }
}

export default SearchResults;
