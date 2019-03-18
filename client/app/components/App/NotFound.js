import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";


const NotFound = () => (
  <div style={{height:"700px"}}>
    <Jumbotron
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <h2>Page not found</h2>
      <Link to="/"><Button style={{backgroundColor:'white',color:'#007bff',border:'2px solid #007bff'}}>Return to homepage</Button></Link>
    </Jumbotron>
  </div>
);

export default NotFound;
