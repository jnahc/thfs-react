import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

function RegisterModal(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <div className="nav-link" variant="primary" onClick={handleShow}>
       Register
     </div>

     <Modal className="roudned shadow-lg" show={show} onHide={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>
           Register
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>
        <div className="row">
          <div className="col">
            <form onSubmit={props.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="firstName" name="firstName" value={props.user.firstName} />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="lastName" name="lastName" value={props.user.lastName} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={props.user.email} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={props.user.password} />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input onChange={props.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={props.user.password2} />
              </div>
              <div className="row">
              <button id="register-button" onClick={handleClose} className="btn" type="submit">Register</button>
              <button id="register-close" className="btn" onClick={handleClose} >Cancel</button>
              </div>
            </form>
          </div>
        </div>
       </Modal.Body>
     </Modal>
    </>
  )

}

export default RegisterModal;