import React, {Component} from 'react';
import CastDetailCommentList from "../../CastDetailCommentList/CastDetailCommentList"
import axios from 'axios';

class CastCommentContainer extends Component {
  constructor(){
    super();
    this.state = {
    commentList: [],
    castId: "",
    }
    this.handleDelete = this.handleDelete.bind(this);
    

  }

  componentDidMount () {
    this.grabCommentList();
    this.setProps();
  }  

  setProps () {
    let currentCast = window.location.pathname.split('/')[2];
    this.setState({
      castId: currentCast,      
    })

  }

  handleDelete = (postId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/comments/${postId}`)
      .then((res) => {
        console.log(res)
        this.grabCommentList()     
      })
      .catch((err) => console.log(err))
  }

  grabCommentList () {
    const castId = window.location.pathname.split('/')[2];
    axios.get(`${process.env.REACT_APP_API_URL}/comments/cast/${castId}`)
      .then((res) => {
        this.setState({
          commentList: res.data.comments
        });
      })
      .catch((err) => console.log(err));
  }

  render () {
    return (
      <>
        <h1>This is the CastCommentContainer</h1>
        <CastDetailCommentList currentCast={this.state.castId} currentUser={this.props.currentUser} commentList={this.state.commentList} castName={this.props.castName} handleDelete={this.handleDelete} />
      </>
    );
  };
};

export default CastCommentContainer;
