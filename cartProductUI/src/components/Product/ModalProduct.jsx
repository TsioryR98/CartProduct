import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useModal } from "../../context/ModalContext";

const ModalProduct = () => {
  const { closeModal, openedModal,selectedProduct } = useModal();
  return (
    <>
      <Modal
        show={openedModal}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        {/*Verify if selectedproduct is not null with && */}
        {selectedProduct && (
        <Modal.Body>
         <p>{selectedProduct.title}</p>
        </Modal.Body>
      )}
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
