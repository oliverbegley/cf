import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      query: window.location.pathname.split("/")[
        window.location.pathname.split("/").length - 1
      ]
    };
  }



  componentDidMount() {
    this.setState({isLoading: false})
    console.log("this.state", this.state);
  }

  render() {
    const {
      isLoading,
      query
    } = this.state;

    if (isLoading) {
      return (
        <div style={{ height: "100%" }}>
          <Jumbotron
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <h2>Loading Search Results</h2>
          </Jumbotron>
        </div>
      );
    }

    return (
      <h2>
        Showing results for{"HELP"}
        {
          window.location.pathname.split("/")[
            window.location.pathname.split("/").length - 1
          ]
        }
      </h2>
    );
  }
}

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}

export default SearchResults;
