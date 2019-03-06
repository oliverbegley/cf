import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import logo from '../../../public/assets/img/comfactLogo.jpg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      isOpen: false,
      query: ''
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onSearch(){
    console.log('this.state', this.state);

    }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" style={{height: "10%"}}>
          <NavbarBrand href="/"><img src={logo} style={{height:"60px",borderRadius:"15px", border:'2px solid #888889'}}></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/LogIn/">Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup/">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile/1">profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/oliverbegley">
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/fact/addfact">
                  AddFact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}