import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import Navbar from "./components/Navbar/Navbar"

import './App.css';

class App extends Component {

  render () {
    return (
      <>
        <Navbar />
        <Routes />
      </>
    );
  };
};

export default withRouter(App);
