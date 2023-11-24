import { Modal } from "react-bootstrap";
import React from "react";

const CustomModal = ({ modalHead, show, handleClose, children }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <div>
        <Modal.Header closeButton>
          <Modal.Title>{modalHead}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </div>
    </Modal>
  );
};

export default CustomModal;
