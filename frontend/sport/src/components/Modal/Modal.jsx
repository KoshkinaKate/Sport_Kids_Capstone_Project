import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

//this page is related to signUp and Auth for NavBar presentation. STILL UNDER CONSTRACTION
//UI element that overlays the main content, used to display additional information or to collect input from the user.
