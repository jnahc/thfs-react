import React, {Component} from 'react';
import CommentModal from "../../CommentModal/CommentModal";
import axios from 'axios';

class CommentModalContainer extends Component {
  state = {
    body: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post(`${process.env.REACT_APP_API_URL}/comments`, this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render(){
    return(
      <CommentModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} comment={this.state} />
    )
  };


};

export default CommentModalContainer;