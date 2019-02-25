import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

class TopicDashboard extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default TopicDashboard;
