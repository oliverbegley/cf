import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button, Badge } from "reactstrap";

const fact = {
  id: 3,
  title: "All you can hear is these YEOS",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida arcu nec ex tincidunt commodo. Etiam in convallis lorem. In quam risus, consequat at al",
  userId: "",
  creationDate: "",
  subject: "politics",
  upvoters: [
    "Alan",
    "Alice",
    "Arvile",
    "Shithead",
    "Nigel",
    "Andy",
    "Hardwell"
  ],
  downvoters: ["Adonis", "Arge", "Axl"],
  evidence: ["d1", "d2", "dnsands"]
};

class Fact extends Component {
  constructor(props) {
    super(props);

    this.state = { fact: fact };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ fact: fact });
    }, 500);
  }

  render() {
    return (
      <div>
        <Jumbotron style={{ margin: "20px" }}>
          <Container>
            <Row>
              <h3>
                {this.state.fact.title}
                <Badge color="warning" style={{ margin: "0px 10px 0px 10px" }}>
                  {this.state.fact.subject}
                </Badge>
              </h3>
            </Row>
            <Row>
              <Col xs="2">
                <b>Description: </b>
              </Col>
              <Col xs="7">{this.state.fact.description}</Col>
              <Col xs="1" />
              <Col xs="2">
                <Button outline color="success">
                  +
                </Button>
                <span style={{ margin: "0px 10px 0px 10px"}}>
                  {this.state.fact.upvoters.length -
                    this.state.fact.downvoters.length}
                </span>
                <Button outline color="danger">
                  -
                </Button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Fact;
