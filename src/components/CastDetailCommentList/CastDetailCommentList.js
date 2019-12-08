import React from 'react';
import CastDetailCommentRow from "./CastDetailCommentRow";
import "./CastDetailCommentRow";


const CastDetailCommentList = (props) => {
  const list = props.commentList.map((comment) => {

    return(
      <CastDetailCommentRow
        key={comment._id}
        id={comment._id}
        author={comment.author}
        body={comment.body}
      />
    )
  });

  return (
    <div>
      This is the CastDetailCommentList component
      {list}
    </div>
  )
};

export default CastDetailCommentList;