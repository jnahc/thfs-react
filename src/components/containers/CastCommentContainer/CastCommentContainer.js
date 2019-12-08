import React, {Component} from 'react';
import CastDetailCommentList from "../../CastDetailCommentList/CastDetailCommentList"
import axios from 'axios';

class CastCommentContainer extends Component {
  state = {
    commentList: [],
    castId: "",
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
        <CastDetailCommentList currentCast={this.state.castId} currentUser={this.props.currentUser} commentList={this.state.commentList} castName={this.props.castName} />
      </>
    );
  };
};

export default CastCommentContainer;
