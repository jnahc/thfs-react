import React from 'react';
import {withRouter} from 'react-router-dom'
import HomeCommentRowContainer from "./HomeCommentRowContainer"

const HomeCommentList = (props) => {
  const list = props.allCommentList.map((comment)=>{
    return (
      <HomeCommentRowContainer
        key={comment.id}
        comment={comment}
      />
    )
  });
  return(
    <>
      {list}
      This is the HomeCommentList
    </>
  );
};

export default withRouter(HomeCommentList);