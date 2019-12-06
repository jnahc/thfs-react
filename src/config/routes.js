import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../components/Home/Home"
import ProfileContainer from "../components/containers/ProfileContainer/ProfileContainer"
import CastListContainer from "../components/containers/CastListContainer/CastListContainer"
import CastDetailContainer from "../components/containers/CastDetailContainer/CastDetailContainer"

export default ({currentUser}) => 
(
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path='/profile' component={ProfileContainer} />
    <Route path='/cast-list' component={CastListContainer} />
    <Route path='/cast/:castId' component={CastDetailContainer} /> />
  </Switch>
  
)