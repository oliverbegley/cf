import React, { Component } from "react";
import "whatwg-fetch";
import { Link } from "react-router-dom";
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
import upVoteImage from "../../../public/assets/img/upvote.png";
import downVoteImage from "../../../public/assets/img/downvote.png";
import mixedImage from "../../../public/assets/img/mixed.png";

const user = {
  firstName: "Michael",
  surname: "Stephens",
  country: "GB",
  email: "bigtest@tester.com",
  signUpDate: "10/2/2018"
};

function getDescriptionShort(description) {
  if (description.length > 150) {
    return description.substring(0, 150) + "...";
  } else {
    return description;
  }
}

function getFactVoteIcon(arrayUp, arrayDown) {
  if(arrayUp.length > arrayDown.length){
    return(<img src={upVoteImage} style={{height:"20px",float:"right"}}/>)
  }
  if(arrayUp.length < arrayDown.length){
    return(<img src={downVoteImage} style={{height:"20px",float:"right"}}/>)
  }
  return(<img src={mixedImage} style={{height:"20px",float:"right"}}/>)
}

const FactRow = props => (
  <Card
    body
    outline
    color="primary"
    style={{ width: "100%", marginTop: "10px", boxShadow: "5px 5px 5px grey", backgroundColor:'white'}}
  >
    <CardTitle>
      <h3>
        {props.fact.title} &nbsp;
        <Badge color="warning">{props.fact.subject}</Badge>
        &nbsp;
        {getFactVoteIcon(props.fact.upvoters, props.fact.downvoters)}
      </h3>
    </CardTitle>
    <CardText>{getDescriptionShort(props.fact.description)}</CardText>
    <Link to={"/fact/"+ props.fact._id}>
      <Button
        color="primary"
        style={{ maxWidth: "50%", justifyContent: "center" }}
      >
        View
      </Button>
    </Link>
  </Card>
);

function FactTable(props) {
  const factRows = props.facts.map(fact => (
    <FactRow key={fact._id} fact={fact} />
  ));
  return <div>{factRows}</div>;
}

class ProfileDashboard extends Component {
  constructor(props) {
    super();
    this.state = { postFacts: [], voteFacts: [], isLoading: false };
  }

  componentDidMount() {
    fetch("/api/getfactsuserposted?postuserid=5c8e94c75ef5d98f5645cd69")
      .then(res => res.json())
      .then(json => {
        this.setState({
          postFacts: json,
          isLoading: false
        });
      });
    fetch("/api/getfactsuservoted?voteuserid=5c8e94c75ef5d98f5645cd69")
      .then(res => res.json())
      .then(json => {
        this.setState({
          voteFacts: json,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading } = this.state;
    if (!isLoading) {
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
                <div
                  style={{
                    borderRight: "1px solid rgba(0,0,0,.1)",
                    paddingRight: "30px"
                  }}
                >
                  <h2>Posting history</h2>
                  <FactTable facts={this.state.postFacts} />
                </div>
              </Col>
              <Col>
                <h2>Voting history</h2>
                <FactTable facts={this.state.voteFacts} />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      );
    }
    if (isLoading) {
      <div>I'm loading</div>;
    }
  }
}

export default ProfileDashboard;
