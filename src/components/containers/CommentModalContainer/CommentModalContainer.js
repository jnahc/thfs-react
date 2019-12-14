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
    // console.log('handleSubmit on CMC fired',this.state);
    axios.post(`${process.env.REACT_APP_API_URL}/comments/${this.props.currentUser}/${window.location.pathname.split('/')[2]}`, this.state)
      .then((res) => {
        console.log(res);
        // this.setState({
        //   body: "",
        // });
        // this.props.setProps()
        // window.location.reload();
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