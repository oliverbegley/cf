import React from "react";
import { Link } from "react-router-dom";
import {Jumbotron} from 'reactstrap';

const NotFound = () => (
  <div style={{ height:"100%"}}>
  <Jumbotron style={{  position: "absolute", top: "50%",left: "50%",transform: "translate(-50%, -50%)"}}>
    <h2>Page not found</h2>
    <Link to="/">Return to homepage</Link>
    </Jumbotron>
  </div>
);

export default NotFound;
