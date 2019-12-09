import React from 'react';
import {withRouter} from 'react-router-dom'
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
        handleDelete={props.handleDelete}
        handleSubmit={props.handleSubmit}
      />
    )
  });

  return (
    <div className="col">
      This is the CastDetailCommentList component
      {list}
    </div>
  )
};

export default withRouter(CastDetailCommentList);