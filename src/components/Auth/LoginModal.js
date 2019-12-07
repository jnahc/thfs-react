import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function LoginModal (props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =() => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <form onSubmit={props.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input onChange={props.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={props.user.email} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={props.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={props.user.password} />
                  </div>
                  <button id="login-button" onClick={handleClose} className="btn btn-primary float-right" type="submit">Login</button><button id="login-close" onClick={handleCLose} >Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default LoginModal;