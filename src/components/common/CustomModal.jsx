import { Modal, Button } from "react-bootstrap";
import React from "react";

const CustomModal = ({
  modalHead,
  show,
  handleClose,
  handleShow,
  children,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <div>
        <Modal.Header closeButton>
          <Modal.Title>{modalHead}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default CustomModal;
