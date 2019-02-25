import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";

const IssueRow = (props) => (
  <tr>
    <td>{props.issue.id}</td>
    <td>{props.issue.title}</td>
    <td>{props.issue.subject}</td>
    <td>{props.issue.description}</td>
  </tr>
)

function IssueTable(props) {
  const issueRows = props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </table>
  );
}


const issues = [
  {
    id: 0,
    title: "TestFact",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida arcu nec ex tincidunt commodo. Etiam in convallis lorem. In quam risus, consequat at aliquam sed, pulvinar nec lectus. Nunc nec neque dui. Praesent rutrum tortor ex, a ullamcorper ipsum bibendum quis. Morbi ullamcorper vulputate lorem non consectetur. Aliquam non.",
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida arcu nec ex tincidunt commodo. Etiam in convallis lorem. In quam risus, consequat at aliquam sed, pulvinar nec lectus. Nunc nec neque dui. Praesent rutrum tortor ex, a ullamcorper ipsum bibendum quis. Morbi ullamcorper vulputate lorem non consectetur. Aliquam non.",
    userId: "",
    creationDate: "",
    subject: "Sport",
    upvoters: ["Iain", "Craig", "Bob"],
    downvoters: ["Lain", "Garry", "Shaun"],
    evidence: ["e1", "e2", "e3"]
  },
  {
    id: 3,
    title: "All you can hear is these YEOS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida arcu nec ex tincidunt commodo. Etiam in convallis lorem. In quam risus, consequat at aliquam sed, pulvinar nec lectus. Nunc nec neque dui. Praesent rutrum tortor ex, a ullamcorper ipsum bibendum quis. Morbi ullamcorper vulputate lorem non consectetur. Aliquam non.",
    userId: "",
    creationDate: "",
    subject: "Politics",
    upvoters: ["Alan", "Alice", "Arvile"],
    downvoters: ["Adonis", "Arge", "Axl"],
    evidence: ["d1", "d2", "dnsands"]
  }
];

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };

    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ issues: issues });
    }, 500);
  }

  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);
    this.setState({ issues: newIssues });
  }

  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueTable issues={this.state.issues} />
      </div>
    );
  }
}export default IssueList;
