import React from 'react';
// import {Link} from 'react-router-dom';

const CastDetailCommentRow = (props) => {

  if(!props.editComment && !props.deleteComment && props.currentUser === props.details.comment.author){
    return (    
      <div className='card'>
        <dl>
          <dd>About: {props.castName}</dd>
          <dd>Author: {props.details.author}</dd>
          <dd>Text: {props.details.comment.body}</dd>
          <dd>Date: {props.details.comment.dateCreated}</dd>
        </dl>
        <button onClick={props.onEdit}>Edit</button>
        <div onClick={props.setDeleteTrue} className="btn btn-primary">Delete</div>
      </div>    
    )
  } else if (props.editComment && props.currentUser === props.details.comment.author){
    return (
      <>
      <div className="card">
        <h1 className="mb-3" id="words-edit-post">Edit Post</h1>
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="body">Comment</label>
            <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="body" name="body" value={props.body} />
            <button id="comment-button" className="btn btn-primary">Save Comment</button>
          </div>
        </form>
      </div>
      </>

    ) 
  } else if (props.deleteComment && props.currentUser === props.details.comment.author){
    return (
      <>
        <div className="card">
          <h1 className="mb-3" id="words-edit-post">Are you sure you want to delete?</h1>
          <form>
            <div className="form-group">
              <div onClick={()=>props.handleDelete(props.details.comment._id)} id="comment-button" className="btn btn-primary">Delete</div>
              <div onClick={props.setDeleteFalse} className="btn btn-primary">Cancel</div>
            </div>
          </form>
        </div>
      </>
    ) 
  } else {
    return (    
      <div className='card'>
        <dl>
          <dd>About: {props.castName}</dd>
          <dd>Author: {props.details.author}</dd>
          <dd>Text: {props.details.comment.body}</dd>
          <dd>Date: {props.details.comment.dateCreated}</dd>
        </dl>
      </div> 
    )   
  } 
}

export default CastDetailCommentRow;