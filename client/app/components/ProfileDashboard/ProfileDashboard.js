import React, { Component } from "react";
import "whatwg-fetch";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  Button,
  Badge
} from "reactstrap";

import placeholderImage from "../../../public/assets/img/placeholderProfileImage.jpeg";

const user = {
  firstName: "Michael",
  surname: "Stephens",
  country: "GB",
  email: "bigtest@tester.com",
  signUpDate: "10/2/2018"
};

const facts = [
  {
    id: 0,
    title: "TestFact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida arcu nec ex tincidunt commodo. Etiam in convallis lorem. In quam risus, consequat at al",
    userId: "",
    creationDate: "",
    subject: "science",
    upvoters: ["Peter", "Graham", "Joel"],
    downvoters: ["Saul", "Alex", "PublicEnemE"],
    evidence: ["evidence1", "evidence2", "evidence2"]
  },
  {
    id: 1,
    title: "Another One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida arcu nec ex tincidunt commodo. Etiam in convallis lorem. In quam risus, consequat at al",
    userId: "",
    creationDate: "",
    subject: "sport",
    upvoters: ["Iain", "Craig", "Bob"],
    downvoters: ["Lain", "Garry", "Shaun"],
    evidence: ["e1", "e2", "e3"]
  },
  {
    id: 3,
    title: "All you can hear is these YEOS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida arcu nec ex tincidunt commodo. Etiam in convallis lorem. In quam risus, consequat at al",
    userId: "",
    creationDate: "",
    subject: "politics",
    upvoters: ["Alan", "Alice", "Arvile"],
    downvoters: ["Adonis", "Arge", "Axl"],
    evidence: ["d1", "d2", "dnsands"]
  }
];

const FactRow = props => (
  <Card
    body
    outline
    color="primary"
    style={{ width: "100%", marginTop: "10px" }}
  >
    <CardTitle>
      <h3>
        {props.fact.title} &nbsp;
        <Badge color="warning">{props.fact.subject}</Badge>
      </h3>
    </CardTitle>
    <CardText>{props.fact.description}</CardText>
    <Button
      color="primary"
      style={{ maxWidth: "50%", justifyContent: "center" }}
    >
      View
    </Button>
  </Card>
);

function FactTable(props) {
  const factRows = props.facts.map(fact => (
    <FactRow key={fact.id} fact={fact} />
  ));
  return <div>{factRows}</div>;
}

function EvidenceTable(props) {
  return (
    <Card
      body
      outline
      color="primary"
      style={{ width: "100%", marginTop: "10px" }}
    >
      <CardTitle>
        <h3>
          Upload Title &nbsp;
          <Badge color="warning">Upload subject</Badge>
        </h3>
      </CardTitle>
      <CardText>Upload desciption</CardText>
      <Button
        color="primary"
        style={{ maxWidth: "50%", justifyContent: "center" }}
      >
        View
      </Button>
    </Card>
  );
}

class ProfileDashboard extends Component {
  constructor(props) {
    super();
    this.state = { facts: [] };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ facts: facts });
    }, 500);
  }

  render() {
    return (
      <Jumbotron style={{ margin: "20px" }}>
        <Container>
          <Row>
            <h1>Profile Dashboard</h1>
          </Row>
          <Row>
            <Col>
              <img
                src={placeholderImage}
                style={{
                  height: "150px",
                  borderRadius: "75px",
                  borderStyle: "solid",
                  borderColor: "grey"
                }}
              />
            </Col>
            <Col>
              <Row>
                <b>Name:</b>&nbsp;{user.surname}, {user.firstName}
              </Row>
              <Row>
                <b>Email:</b>&nbsp;{user.email}
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <div style={{borderRight: '1px solid rgba(0,0,0,.1)', paddingRight:'30px'}}>
                <h2>Posting history</h2>
                <EvidenceTable />
              </div>
            </Col>
            <Col>
              <h2>Voting history</h2>
              <FactTable facts={this.state.facts} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default ProfileDashboard;
