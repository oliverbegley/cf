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
  Badge
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
        
          <Col xs='12' md='6'>
          <Link to={{ pathname: "/search", search:"?subject=business"}}>
            <Card inverse>
              <CardImg width="100%" src={businessImage} alt="Card image cap"/>
              <CardImgOverlay>
                <CardTitle><Badge color='warning'>Business</Badge></CardTitle>
              </CardImgOverlay>
            </Card>
            </Link>
            <br />
            <Link to={{ pathname: "/search", search:"?subject=politics"}}>
            <Card inverse>
              <CardImg width="100%" src={politicsImage} alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><Badge color='warning'>Politics</Badge></CardTitle>
              </CardImgOverlay>
            </Card>
            </Link>
            <br />
            <Link to={{ pathname: "/search", search:"?subject=sport"}}>
            <Card inverse>
              <CardImg width="100%" src={sportImage} alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle><Badge color='warning'>Sport</Badge></CardTitle>
              </CardImgOverlay>
            </Card>
            </Link>
          </Col>
          <Col xs='12' md='6'>
          <Link to={{ pathname: "/search", search:"?subject=enviornment"}}>
          <Card inverse>
            <CardImg width="100%" src={environmentImage} alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle><Badge color='warning'>Environment</Badge></CardTitle>
            </CardImgOverlay>
          </Card>
          </Link>
          <br />
          <Link to={{ pathname: "/search", search:"?subject=science"}}>
          <Card inverse>
            <CardImg width="100%" src={scienceImage} alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle><Badge color='warning'>Science</Badge></CardTitle>
            </CardImgOverlay>
          </Card>
          </Link>
          <br />
          <Link to={{ pathname: "/search", search:"?subject=technology"}}>
          <Card inverse>
            <CardImg width="100%" src={technologyImage} alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle><Badge color='warning'>Technology</Badge></CardTitle>
            </CardImgOverlay>
          </Card>
          </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default TopicDashboard;
