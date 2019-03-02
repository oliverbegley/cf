import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button, Badge, Card} from "reactstrap";

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
  evidence: [{id:"4",url:"https://www.google.com/search?q=open+link+in+new+tab&oq=open+link+in+new+tab&aqs=chrome..69i57j0l5.3561j0j4&sourceid=chrome&ie=UTF-8", title: "This is a piece of evidence", user: "memeBoi",comment:"This is a main point that someone wants to sat", supporting:false},
  {id:"0",url:"http://www.bbc.com/sport",title:"A bbc report said this!",user:"Fuckface",comment:"Lfnviob fuo fuio fg fbjkf aufioa fnjkc xalk p urao rnajr brar bjrlkhr brl r l Lfnviob fuo fuio fg fbjkf aufioa fnjkc xalk p urao rnajr brar bjrlkhr brl r l Lfnviob fuo fuio fg fbjkf aufioa fnjkc xalk p urao rnajr brar bjrlkhr brl r l Lfnviob fuo fuio fg fbjkf aufioa fnjkc xalk p urao rnajr brar bjrlkhr brl r l Lfnviob fuo fuio fg fbjkf aufioa fnjkc xalk p urao rnajr brar bjrlkhr brl r l Lfnviob fuo fuio fg fbjkf aufioa fnjkc xalk p urao rnajr brar bjrlkhr brl r l Lfnviob fuo fuio fg fbjkf aufioa fnjkc xalk p urao rnajr brar bjrlkhr brl r l v", supporting:true},
  {id:"1",url:"https://en.wikipedia.org/wiki/Randomness",title:"Wow look at wikipedia",user:"cardiB",comment:"This is some fjipsbvo npfisgio ebdufoibv", supporting:false},
  {id:"2",url:"http://www.facebook.com/oliverbegley",title:"Facebook is a waste of time",user:"NigelF",comment:"This is a link for facebook. It's the most amazing platform", supporting:true}]
};

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
      <a href={props.evidence.url} target="_blank">
      {
        getLocation(props.evidence.url).hostname.replace(/^www\./,'')

      }
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
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ fact: fact,
      allEvidence: fact.evidence});
    }, 500);
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Jumbotron style={{ margin: "20px" }}>
          <Container>
            <Row>
              <h2>
                {this.state.fact.title}
                <Badge color="warning" style={{ margin: "0px 10px 0px 10px" }}>
                  {this.state.fact.subject}
                </Badge>
              </h2>
              <div style={{float:'right'}}>
              <i>
              Posted on :{this.state.fact.creationDate}
              </i>
              </div>
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
