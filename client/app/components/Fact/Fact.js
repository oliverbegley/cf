import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button, Badge, Card} from "reactstrap";

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

const EvidenceRow = props => (
  <Row style={{marginBottom: "10px"}}>
    <Card style={{width: "100%",height:"100%", padding:"5px", backgroundColor:"DB2929", color:"black"}}>
    <Row>
      <Col sm='2'>
      {props.evidence.user}
      </Col>
      <Col>
      <h4>
      {props.evidence.title}
      </h4>
      </Col>
      <Col>
      Source: <a href={props.evidence.url} target="_blank">
      {
        getLocation(props.evidence.url).hostname.replace(/^www\./,'')
      } <img src="https://img.icons8.com/office/16/000000/ok.png" />
      </a>
      </Col>

      <Col sm="2">
      {props.evidence.supporting ?
        <Badge color="success" pill>supporting</Badge>
        :
        <Badge color="danger" pill>opposing</Badge>
      }
      </Col>
    </Row>
    <Row>
      <Col>
      {props.evidence.comment}
      </Col>
    </Row>

    </Card>
  </Row>
);

var testing;
var testString;

function EvidenceTable(props) {
  const evidenceRows = props.allEvidence.map(evidence => (
    <EvidenceRow key={evidence.id} evidence={evidence} />
  ));
  return (
      <div>{evidenceRows}</div>
  );
}

class Fact extends Component {
  constructor(props) {
    super(props);
    this.state = { fact: fact, allEvidence: fact.evidence };
  }

  componentDidMount() {
    testing = this.props.match.params.factid
    var testString = "/api/fact/" + "5c83e5755d767842806aab7a";
    fetch(testString)
      .then(response => response.json())
      .then(this.setState({ fact: fact,
        allEvidence: fact.evidence}));
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {}
        <Jumbotron style={{ margin: "20px" }}>
        {"api/fact/"+ testing}
          <Container>
            <Row>
              <h2>
                {this.state.fact.title}
                <Badge color="warning" style={{ margin: "0px 10px 0px 10px" }}>
                  {this.state.fact.subject}
                </Badge>
              </h2>
            </Row>
            <Row>
            <i>
              Posted on :{this.state.fact.creationDate}
              </i>
            </Row>
            <hr />
            <Row style={{ color: "grey" }}>

            </Row>
            <Row>
              <Col xs="2">
                <b>Description: </b>
              </Col>
              <Col xs="7">{this.state.fact.description}</Col>
              <Col xs="3">
                <Button outline color="success">
                  +
                </Button>
                <span style={{ margin: "0px 10px 0px 10px" }}>
                  {this.state.fact.upvoters.length -
                    this.state.fact.downvoters.length}
                </span>
                <Button outline color="danger">
                  -
                </Button>
              </Col>
            </Row>
            <hr />
            <h4>Evidence</h4>
            <EvidenceTable allEvidence={this.state.allEvidence} />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Fact;
