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
      <div className='card cast-comment-row'>
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <dl>
                <dd><span className="comment-description-front">About:</span> {props.castName}</dd>
                <dd><span className="comment-description-front">Author:</span> {props.details.author}</dd>
                <dd><span className="comment-description-front">Date:</span> {props.details.comment.dateCreated}</dd>
                <dd><span className="comment-description-front">Text:</span> {props.details.comment.body}</dd>
              </dl>
            </div>
            <div className="col d-flex justify-content-end">
              <img src={props.details.authorPic} alt={props.details.author}/>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
          <button onClick={props.onEdit} className="btn" >Edit</button>
          <div onClick={props.setDeleteTrue} className="btn">Delete</div>
          </div>
        </div>
      </div>    
    )
  } else if (props.editComment && props.currentUser === props.details.comment.author){
    return (
      <div className="card cast-comment-row">
        <div className="card-body">
          <div className="card-title">Edit Comment</div>
          <form>
            <div className="form-group">
              <label htmlFor="body">Comment</label>
              <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="body" name="body" value={props.body} />
              <div onClick={handleSubmitandSetEditFalse} id="comment-button" className="btn mt-2">Save Comment</div>
            </div>
          </form>
        </div>
      </div>
    ) 
  } else if (props.deleteComment && props.currentUser === props.details.comment.author){
    return (
      <div className="card cast-comment-row">
        <div className="card-body">
          <div className="card-title">Are you sure you want to delete?</div>
          <form>
            <div className="form-group">
              <div onClick={()=>props.handleDelete(props.details.comment._id)} id="comment-button" className="btn mr-2">Delete</div>
              <div onClick={props.setDeleteFalse} className="btn ml-2">Cancel</div>
            </div>
          </form>
        </div>
      </div>
    ) 
  } else {
    return (    
      <div className='card cast-comment-row'>
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <dl>
                <dd><span className="comment-description-front">About:</span> {props.castName}</dd>
                <dd><span className="comment-description-front">Author:</span> {props.details.author}</dd>
                <dd><span className="comment-description-front">Date:</span> {props.details.comment.dateCreated}</dd>
                <dd><span className="comment-description-front">Text:</span> {props.details.comment.body}</dd>
              </dl>
            </div>
            <div className="col d-flex justify-content-end">
              <img src={props.details.authorPic} alt={props.details.author}/>
            </div>
          </div>          
        </div>
      </div>    
    );
  };
};

export default CastDetailCommentRow;