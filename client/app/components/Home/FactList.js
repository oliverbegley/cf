import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Badge,Button } from "reactstrap";

const FactRow = props => (
  <Jumbotron>
    <h4>{props.fact.title}</h4><Badge color="warning" pill>{props.fact.subject}</Badge>
    <p>{getDescriptionShort(props.fact.description)}</p>
    <Link to={"/fact/"+props.fact._id}><Button style={{width: '100%'}}>view</Button></Link>
  </Jumbotron>
);

function FactTable(props) {
  const factRows = props.facts.map(fact => (
    <FactRow key={fact._id} fact={fact} />
  ));
  return (
      <div>{factRows}</div>
  );
}

function getDescriptionShort(description){
  if(description.length > 150){
    return description.substring(0,150) + "...";
  }else{
    return description;
  }
}

class FactList extends React.Component {
  constructor() {
    super();
    this.state = { facts: [] };
  }

  componentDidMount() {
    fetch("/api/fact/recent/3")
      .then(response => response.json())
      .then(facts => this.setState({ facts }));
  }


  loadData() {
    setTimeout(() => {
      this.setState({ facts: facts });
    }, 500);
  }

  render() {
    return (
      <div>
        <FactTable facts={this.state.facts} />
      </div>
    );
  }
}
export default FactList;
