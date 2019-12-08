import React, {Component} from 'react';
import CastDetailCommentList from "../../CastDetailCommentList/CastDetailCommentList";
import axios from 'axios';

class CastCommentContainer extends Component {
  state = {
    commentList:[]
  }

  componentDidMount () {

  }

  grabCastComments () {

  }

  render () {
    return (
      <>
        <h1>This is the CastCommentContainer</h1>
        <CastDetailCommentList commentList={this.state.commentList} />
      </>
    );
  };
};

export default CastCommentContainer;
