import React from 'react'
import { BackdropCss, ModalCss } from './Modal.styled';

const Modal = ({closeModal, email, open}) => {
  return (
    <BackdropCss onClick={closeModal}>
          <ModalCss onClick={closeModal}>
        <h2>{email}</h2>
      </ModalCss>
    </BackdropCss>
  );
}



export default Modal