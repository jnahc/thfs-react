import React from 'react';
// import {Link} from 'react-router-dom';

const CastDetailCommentRow = (props) => {

  let handleSubmitandSetEditFalse = () => {
    console.log(props)
    props.handleSubmit(props.details.comment._id, {body:props.body})
    props.setEditFalse()    
  }

  if(!props.editComment && !props.deleteComment && props.currentUser === props.details.comment.author){
    return (    
      <div className='card'>
        <div className="card-body">
          <div className="card-title">Comment</div>
          <img src={props.details.authorPic} alt={props.details.author}/>
          <dl>
            <dd>About: {props.castName}</dd>
            <dd>Author: {props.details.author}</dd>
            <dd>Text: {props.details.comment.body}</dd>
            <dd>Date: {props.details.comment.dateCreated}</dd>
          </dl>
        </div>
        <div className="card-body">
          <button onClick={props.onEdit}>Edit</button>
          <div onClick={props.setDeleteTrue} className="btn btn-primary">Delete</div>
        </div>
      </div>    
    )
  } else if (props.editComment && props.currentUser === props.details.comment.author){
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title">Edit Comment</div>
          <form>
            <div className="form-group">
              <label htmlFor="body">Comment</label>
              <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="body" name="body" value={props.body} />
              <div onClick={handleSubmitandSetEditFalse} id="comment-button" className="btn btn-primary">Save Comment</div>
            </div>
          </form>
        </div>
      </div>
    ) 
  } else if (props.deleteComment && props.currentUser === props.details.comment.author){
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title">Are you sure you want to delete?</div>
          <form>
            <div className="form-group">
              <div onClick={()=>props.handleDelete(props.details.comment._id)} id="comment-button" className="btn btn-primary">Delete</div>
              <div onClick={props.setDeleteFalse} className="btn btn-primary">Cancel</div>
            </div>
          </form>
        </div>
      </div>
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