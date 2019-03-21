import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import loading from "../../../public/assets/gif/loading.gif";
import FactList from "../Home/FactList";
import piechart from "../../../public/assets/img/piechart.png";
class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      statistics: {},
      mostViewedFacts: [],
      userCount: 50,
      postCount: 30
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    const { isLoading } = this.state;

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
          <br />
          <Container>
              <Row>
                  <h1>
                      Statistics
                  </h1>
              </Row>
              <hr />
            <Row>
              <Col sm="9">
              <Row>
                  <h2>
                Popular Topics of the Last Week
                </h2>
              </Row>
              <Row>
              <img src={piechart} style={{width:'600px',height:'400px'}}/>
              </Row>
              <hr />
              <Row>
                  <Col>
                  <Jumbotron>
                  <h4>Facts posted this week</h4>
                  <h2>{this.state.postCount}</h2>
                  </Jumbotron>
                  </Col>
                  <Col>
                  <Jumbotron>
                  <h4>Facts posted this week</h4>
                  <h1>{this.state.userCount}</h1>
                  </Jumbotron>
                  </Col>
                  <Col>
                  <Jumbotron>
                  <h4>Votes Cast this week</h4>
                  <h1>130</h1>
                  </Jumbotron>
                  </Col>
              </Row>
              </Col>
              <Col>
                <Row>
                    <h1>Most Viewed Facts</h1>
                    <FactList />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default Statistics;
