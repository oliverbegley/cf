
const facts = [
    {
      id: 1,
      title: "TestFact",
      userId: "",
      creationDate: "",
      subject: "Meme",
      upvoters: ["Peter", "Graham", "Joel"],
      downvoters: ["Saul", "Alex", "PublicEnemE"],
      evidence: ["evidence1", "evidence2", "evidence2"]
    },
    {
      id: 1,
      title: "Another One",
      userId: "",
      creationDate: "",
      subject: "Sport",
      upvoters: ["Iain", "Craig", "Bob"],
      downvoters: ["Lain", "Garry", "Shaun"],
      evidence: ["e1", "e2", "e3"]
    },
    {
      id: 1,
      title: "All you can hear is these YEOS",
      userId: "",
      creationDate: "",
      subject: "Politics",
      upvoters: ["Alan", "Alice", "Arvile"],
      downvoters: ["Adonis", "Arge", "Axl"],
      evidence: ["d1", "d2", "dnsands"]
    }
  ];
  
  const FactRow = props => (
    <tr>
      <td>{props.fact.id}</td>
      <td>{props.fact.title}</td>
      <td>{props.fact.userId}</td>
      <td>{props.fact.creationDate}</td>
      <td>{props.fact.subject}</td>
      <td>{props.fact.upvoters}</td>
      <td>{props.fact.downvoters}</td>
      <td>{props.fact.evidence}</td>
    </tr>
  );
  
  function FactTable(props) {
    const factRows = props.facts.map(fact => (
      <FactRow key={fact.id} fact={fact} />
    ));
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>title</th>
            <th>userId</th>
            <th>creationDate</th>
            <th>subject</th>
            <th>upvoters</th>
            <th>downvoters</th>
            <th>evidence</th>
          </tr>
        </thead>
        <tbody>{factRows}</tbody>
      </table>
    );
  }
  
  class FactList extends React.Component {
    constructor() {
      super();
      this.state = { facts: [] };
    }
  
    render() {
      return (
        <div>
          <h1>Meme tracker</h1>
          <hr />
          <FactTable facts={this.state.facts} />
          <hr />
        </div>
      );
    }
  }