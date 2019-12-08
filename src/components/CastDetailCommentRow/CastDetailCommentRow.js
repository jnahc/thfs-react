import React from 'react';
// import {Link} from 'react-router-dom';

const CastDetailCommentRow = (props) => {
  return (
    <>
      <div className='card'>
        <dl>
          <dd>About: {props.castName}</dd>
          <dd>Author: {props.castProps.author}</dd>
          <dd>Text: {props.castProps.comment.body}</dd>
          <dd>Date: {props.castProps.comment.dateCreated}</dd>
        </dl>
      </div>
    </>
  )
}

export default CastDetailCommentRow;