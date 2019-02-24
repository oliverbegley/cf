import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Form, FormGroup, Input } from "reactstrap";


import SearchResults from "../App/SearchResults/SearchResults";
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.state = {
      query: "",
      isLoading: false
    };
  }

  onSearch(){
    console.log('this.state', this.state);
    this.setState({isLoading: true});
    }

  render() {
    const {
      query,
      isLoading,
    } = this.state;
    if(isLoading){
      return(
      <h3>Loading Results for <u>{this.state.query}</u></h3>
    )};
    return (
    <div style={{ height: "100%" }}>
      <Form inline style={{ marginLeft: "40px" }}>
        <FormGroup>
          <Input
            type="search"
            name="search"
            id="search"
            placeholder="search here..."
            value={this.state.query}
            onChange={event => {
              this.setState({ query: event.target.value });
            }}
          />
        </FormGroup>
        <Button
          color="primary"
          onClick={this.onSearch}
        >
          Search
        </Button>
      </Form>
      <Jumbotron
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <h2>HOME PLACEHOLDER</h2>
      </Jumbotron>
    </div>
    )
  }
}

export default Home;
