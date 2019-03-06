import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Badge } from "reactstrap";

const FactRow = props => (
  <Jumbotron>
    <h4>{props.fact.title} <Badge color="warning">{props.fact.subject}</Badge></h4>
    <p>{props.fact.description}</p>
  </Jumbotron>
);

function FactTable(props) {
  const factRows = props.facts.map(fact => (
    <FactRow key={fact.id} fact={fact} />
  ));
  return (
      <div>{factRows}</div>
  );
}

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

class FactList extends React.Component {
  constructor() {
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
      <div>
        <FactTable facts={this.state.facts} />
      </div>
    );
  }
}
export default FactList;
