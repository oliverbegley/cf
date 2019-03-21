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
import { getFromStorage } from "../../utils/storage.js";

import logo from '../../../public/assets/img/comfactLogo.jpg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onClickProfile = this.onClickProfile.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      token: "",
      userId: ""
    };
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onClickProfile(){
    this.setState({userId: getFromStorage("the_main_app").userId});
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
              </NavItem>
              <NavItem>
                <Link to='/LogIn/'><NavLink>Log In</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/signup/'><NavLink>Sign Up</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to={'/profile/'+ this.state.userId}><NavLink>Profile</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/statistics/'><NavLink>Statistics</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/stats/'><NavLink>Info</NavLink></Link>
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