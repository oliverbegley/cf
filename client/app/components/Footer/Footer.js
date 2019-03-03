import React, { Component } from 'react';
import {Navbar, Container} from 'reactstrap';

// Import Style

var divStyle = {
  color: 'grey',
  textAlign: 'center'
};

class Footer extends Component{
  render() {
      return(
              <Navbar color="dark" dark>
                  <Container>
                      <h4> Oliver Begley - University of Glasgow - 2019</h4>
                  </Container>
              </Navbar>
      )
  }
}

export default Footer;