import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function LoginModal (props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =() => setShow(true);

  return (
    <>
      <div className="nav-link" variant="warning" onClick={handleShow}>
        Login
      </div>

      <Modal show={show} onHide={handleClose} className="rounded shadow-lg">
        <Modal.Header closeButton>
          <Modal.Title className="border-0">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-2">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <form onSubmit={props.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input onChange={props.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={props.user.email} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={props.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={props.user.password} />
                  </div>
                  <div className="row mt-2">
                    <button id="login-button" onClick={handleClose} className="btn " type="submit mr-2">Login</button>
                    <button id="login-close" className="btn ml-2" onClick={handleClose}>Cancel</button>
                  </div>
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