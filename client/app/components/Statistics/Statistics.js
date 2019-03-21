import React, { Component } from "react";
import {
  Jumbotron,
} from "reactstrap";
import { Link } from "react-router-dom";
import loading from "../../../public/assets/gif/loading.gif";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      statistics: {}
    };
  }

  componentDidMount(){
    fetch("api/getpublicstatistics")
    .then(res => res.json())
    .then(json => {
      this.setState({
        statistics: json,
        isLoading: false
      });
    });
  }

  render() {
    const {
      isLoading,
    } = this.state;

    if (isLoading) {
      return (
        <div>
          loading
          <img
            src={loading}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          />
        </div>
      );
    }

    if (!isLoading) {
      return (
        <div>
            <XYPlot
  width={300}
  height={300}>
  <HorizontalGridLines />
  <LineSeries
    data={[
      {x: 1, y: 10},
      {x: 2, y: 5},
      {x: 3, y: 15}
    ]}/>
  <XAxis />
  <YAxis />
</XYPlot>
        </div>
      );
    }
  }
}

export default Statistics;
