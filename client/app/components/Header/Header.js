import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/"><img src={logo} style={{height:"60px",borderRadius:"15px", border:'2px solid #888889'}}></img></Link>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/LogIn/'><NavLink>Log In</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/signup/'><NavLink>Sign Up</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/profile/1'><NavLink>profile</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/fact/addfact">
                <NavLink>
                  AddFact
                </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}