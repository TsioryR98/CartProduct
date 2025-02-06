import React from "react";
import { useContext, useState, createContext } from "react";

const ModalProductContext = createContext();

const ModalContext = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openedModal, setOpenedModal] = useState(false);

  const productOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenedModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setOpenedModal(false);
  };

  return (
    <ModalProductContext.Provider
      value={{ closeModal, productOpenModal, selectedProduct, openedModal }}
    >
      {children}
    </ModalProductContext.Provider>
  );
};

const useModal = () => {
  return useContext(ModalProductContext);
};

export { useModal, ModalContext };
