import React from 'react';
import CastDetailCommentRowContainer from "../containers/CastDetailCommentRowContainer/CastDetailCommentRowContainer";


const CastDetailCommentList = (props) => {
  const list = props.commentList.map((comment) => {    
    return(
      <CastDetailCommentRowContainer
        key={comment._id} 
        comment={comment}
        currentUser={props.currentUser}
        currentCast={props.currentCast}
        castName={props.castName}
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