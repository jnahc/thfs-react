
import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CommentModal(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="comment-button" onClick={handleShow}>
        Comment
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>
            Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col">
            <form onSubmit={props.handleSubmit}>
              <div className="form-group mt-n3">
                <label htmlFor="body">Add Comment</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="body" name="body" value={props.comment.body} />
                <div className="row mt-2">
                  <button id="comment-button" onClick={handleClose} className="btn">Save Comment</button>
                  <button id="comment-close" className="btn" onClick={handleClose} >Cancel</button>
                </div>              
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CommentModal