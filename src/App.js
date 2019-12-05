import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';

import './App.css';

class App extends Component {

  render () {
    return (
      <>
        <Routes />
      </>
    );
  };
};

export default withRouter(App);
