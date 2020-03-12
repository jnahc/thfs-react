import React from 'react';
import {Link} from 'react-router-dom';
const HomeCommentRow = (props) => {
  return (
    <div className='card cast-comment-row'>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <dl>
              <dd><span className="comment-description-front">About:</span> <Link className="cast-title" to={'/cast/'+props.comment.cast._id}>{props.comment.cast.englishName}</Link> </dd>
              <dd><span className="comment-description-front">Author:</span> {props.comment.author.firstName}</dd>
              <dd><span className="comment-description-front">Date:</span> {props.comment.dateCreated}</dd>
              <dd><span className="comment-description-front">Text:</span> {props.comment.body}</dd>
            </dl>
          </div>
        </div>          
      </div>
    </div>    
  );

};


export default HomeCommentRow;