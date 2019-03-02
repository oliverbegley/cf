import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button, Badge } from "reactstrap";

const fact = {
  id: 3,
  title: "All you can hear is these YEOS",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida arcu nec ex tincidunt commodo. Etiam in convallis lorem. In quam risus, consequat at al",
  userId: "",
  creationDate: "02/03/2019",
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
  evidence: [{url:"www.google.com", title: "This is a comment", user: "memeBoi",comment:"This is a main point that someone wants to sat", supporting:false},
  {url:"www.bbc.com",title:"A bbc report said this!",user:"",comment:"Graham Odell", supporting:true},
  {url:"www.wikipedia.org",title:"Wow look at wikipedia",user:"cardiB",comment:"This is some fjipsbvo npfisgio ebdufoibv", supporting:false},
  {url:"www.facebook.com",title:"Facebook is a waste of time",user:"NigelF",comment:"This is a link for facebook. It's the most amazing platform", supporting:true}]
};
//evidence template {url:"",title:"",user:"",comment:"", supporting:false}

class Fact extends Component {
  constructor(props) {
    super(props);

    this.state = { fact: fact, evidence: fact.evidence };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ fact: fact,
      evidence: fact.evidence});
    }, 500);
  }

  render() {
    console.log(this.state)
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
            <Row style={{ color: "grey" }}>
              Posted on :{this.state.fact.creationDate}
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
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Fact;
