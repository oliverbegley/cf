import React, { Component } from "react";
import "whatwg-fetch";
import { setInStorage, getFromStorage } from "../../utils/storage.js";
import { 
    Jumbotron,
    Container,
    Row,
    Col
} from "reactstrap";

import placeholderImage from '../../../public/assets/img/placeholderProfileImage.jpeg';

const user = {
    firstName:'Michael',
    surname: 'Stephens',
    country: 'GB',
    email: 'bigtest@tester.com',
    signUpDate: '10/2/2018',
}


class ProfileDashboard extends Component {
  constructor(props) {
    super(props);
    };

    render(){   
    return (
        <Jumbotron style={{margin: "20px"}}>
        <Container>
            <Row>
                <h2>Profile Dashboard</h2>
            </Row>
            <Row>
                <img src={placeholderImage} style={{height: '150px', borderRadius:'75px', borderStyle:'solid'}}/>
            </Row>
            <br />
            <Row>
                <Col sm='1'>
                <b>Name: </b>
                </Col>
                <Col>
                {user.surname}, {user.firstName}
                </Col>
            </Row>
            <Row>
                <Col sm='1'>
                <b>Email: </b>
                </Col>
                <Col>
                {user.email}
                </Col>
            </Row>
        </Container>
        </Jumbotron>
    );
    }
}



export default ProfileDashboard;
