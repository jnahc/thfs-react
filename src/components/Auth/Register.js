import React, {Component} from 'react';
import RegisterModal from './RegisterModal';
import axios from 'axios';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '', 
    favoriteCast: '',  
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <RegisterModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} />
      )
  };
};

export default Register;
