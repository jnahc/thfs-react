import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../components/Home/Home"
import ProfileContainer from "../components/containers/ProfileContainer/ProfileContainer"
import CastListContainer from "../components/containers/CastListContainer/CastListContainer"

export default () => 
(
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path='/profile' component={ProfileContainer} />
    <Route path='/cast' component={CastListContainer} />
    {/* <Route path='/cast/:castId' component={CastDetailContainer} /> */}
  </Switch>
  
)