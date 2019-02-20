import React, { Component } from 'react';
import {Navbar, Container} from 'reactstrap';

// Import Style
// eslint-disable-next-line
//import styles from "./Footer.css";

var divStyle = {
  color: 'grey',
  textAlign: 'center'
};

class Footer extends Component{
  render() {
      return(
          <div className="fixed-bottom">  
              <Navbar color="dark" dark>
                  <Container>
                      <h4> Oliver Begley - University of Glasgow - 2019</h4>
                  </Container>
              </Navbar>
          </div>
      )
  }
}

export default Footer;