import React from 'react';
import HomeCommentRow from "./HomeCommentRow"

const HomeCommentList = (props) => {
  const list = props.allCommentList.map((comment)=>{

    return (
      <HomeCommentRow
        key={comment._id}
        comment={comment}
      />
    )
  });

  return(
    <div>
      {list}
    </div>
  );
};

export default HomeCommentList;