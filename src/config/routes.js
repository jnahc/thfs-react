import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../components/Home/Home"
import ProfileContainer from "../components/containers/ProfileContainer/ProfileContainer"

export default () => 
(
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path='/profile' component={ProfileContainer} />
  </Switch>
  
)