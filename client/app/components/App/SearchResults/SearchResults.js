import React from "react";
import { Link } from "react-router-dom";
import {Jumbotron} from 'reactstrap';

class SearchResults extends React.Component {

    render(){
        return(
  <div style={{ height:"100%"}}>
  <Jumbotron style={{  position: "absolute", top: "50%",left: "50%",transform: "translate(-50%, -50%)"}}>
    <h2>SEARCH RESULTS PLACEHOLDER</h2>
    </Jumbotron>
  </div>
)}};

export default SearchResults;
