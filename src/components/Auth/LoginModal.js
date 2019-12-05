import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';

function LoginModal (props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =() => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Login
      </Button>
    </>
  )
}

export default LoginModal;