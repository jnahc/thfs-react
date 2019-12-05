import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
// import LoginModal from "./LoginModal";
import axios from 'axios';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState ({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}
    /auth/login`, this.state, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        this.props.setCurrentUser
        (res.data.data);
        this.props.history.push('/profile');
      })
      .catch((err) => console.log(err))
  };

  render () {
    console.log(this.props)
    return(
      <LoginModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} />
    );
  };

};

export default withRouter(Login);