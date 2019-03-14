import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';


import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './components/App/SearchResults/SearchResults';
import Fact from './components/Fact/Fact'
import ProfileDashboard from './components/ProfileDashboard/ProfileDashboard';
import AddFact from './components/AddFact/AddFact';



render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/profile/:userid" component={ProfileDashboard}/>
        <Route path="/searchresults" component={SearchResults}/>
        <Route path="/fact/addFact" component={AddFact} />
        <Route path="/fact/:factid" component={Fact} />
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
