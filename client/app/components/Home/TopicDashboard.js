import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Container,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

import businessImage from "../../../public/assets/img/business.jpeg";
import environmentImage from "../../../public/assets/img/environment.jpeg";
import politicsImage from "../../../public/assets/img/politics.jpg";
import scienceImage from "../../../public/assets/img/science.jpg";
import sportImage from "../../../public/assets/img/sport.jpeg";
import technologyImage from "../../../public/assets/img/technology.jpg";

class TopicDashboard extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <Col>
        <Card inverse>
        <CardImg width="100%" src={businessImage} alt="Card image cap" />
        <CardImgOverlay>
        <CardTitle>Business</CardTitle>
        </CardImgOverlay>
        </Card>
        </Col>
        <Col>
        <Card inverse>
        <CardImg width="100%" src={environmentImage} alt="Card image cap" />
        <CardImgOverlay>
        <CardTitle>Environment</CardTitle>
        </CardImgOverlay>
        </Card>
        </Col>
        </Row>
        <br />
        <Row>
        <Col>
        <Card inverse>
        <CardImg width="100%" src={politicsImage} alt="Card image cap" />
        <CardImgOverlay>
        <CardTitle>Politics</CardTitle>
        </CardImgOverlay>
        </Card>
        </Col>
        <Col>
        <Card inverse>
        <CardImg width="100%" src={scienceImage} alt="Card image cap" />
        <CardImgOverlay>
        <CardTitle>Science</CardTitle>
        </CardImgOverlay>
        </Card>
        </Col>
        </Row>
        <br />
        <Row>
        <Col>
        <Card inverse>
        <CardImg width="100%" src={sportImage} alt="Card image cap" />
        <CardImgOverlay>
        <CardTitle>Sport</CardTitle>
        </CardImgOverlay>
        </Card>
        </Col>
        <Col>
        <Card inverse>
        <CardImg width="100%" src={technologyImage} alt="Card image cap" />
        <CardImgOverlay>
        <CardTitle >Technology</CardTitle>
        </CardImgOverlay>
        </Card>
        </Col>
        </Row>
      </Container>
    );
  }
}
export default TopicDashboard;
