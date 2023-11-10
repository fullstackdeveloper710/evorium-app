import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

import { CheckoutForm } from "../components/common";

const PaymentModal = ({ show, handleClose, handleShow,children }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <div style={{}}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Screen</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {children}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default PaymentModal;
