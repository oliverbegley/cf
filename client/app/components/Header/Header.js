import React from "react";
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input,
  Button,
  InputGroupAddon
} from "reactstrap";

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
          <NavbarBrand href="/"><h1 style={{color:"grey"}}><u>ComFact</u></h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/LogIn/">LogIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup/">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/oliverbegley">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}