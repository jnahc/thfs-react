import React, {Component} from 'react';
import CommentModal from "../../CommentModal/CommentModal";
import axios from 'axios';

class CommentModalContainer extends Component {
  state = {
    body: "",
    author: "",
    cast: "",
  }
  
  componentDidMount() {
    const currentUser = this.props.currentUser;
    const currentCast = window.location.pathname.split('/')[2];
    this.setState({
      author: currentUser,
      cast: currentCast
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit fired',this.state);
    axios.post(`${process.env.REACT_APP_API_URL}/comments/${this.props.currentUser}/${window.location.pathname.split('/')[2]}`, this.state)
      .then((res) => {
        this.setState({
          body: "",
        });
        console.log(res);
        // window.location.reload();
        this.props.setProps()
      })
      .catch((err) => console.log(err));
  };

  render(){
    return(
      <CommentModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} comment={this.state} currentUser={this.props.currentUser} />
    )
  };


};

export default CommentModalContainer;