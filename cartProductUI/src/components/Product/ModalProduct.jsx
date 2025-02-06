import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useModal } from "../../context/ModalContext";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const ModalProduct = () => {
  const { closeModal, openedModal, selectedProduct } = useModal();
  return (
    <>
      {/*Verify if selectedproduct is not null with && */}
      {selectedProduct && (
        <Modal
          show={openedModal}
          onHide={closeModal}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal_size">
            <Container>
              <Row>
                {/* Left Side */}
                <Col md={6} className="border border-dark">
                  <h4>Left Side</h4>
                  <p>Contenu de gauche</p>
                </Col>

                {/* Right Side */}
                <Col md={6} className="border border-dark">
                  <h4>Right Side</h4>
                  <p>Contenu de droite</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ModalProduct;
