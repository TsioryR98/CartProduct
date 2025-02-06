import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useModal } from "../../context/ModalContext";

const ModalProduct = () => {
  const { closeModal, openedModal, productOpenModal } = useModal();
  return (
    <>
      <Button variant="primary" onClick={productOpenModal}>
        Launch productOpenModal
      </Button>

      <Modal
        show={openedModal}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalProduct;
