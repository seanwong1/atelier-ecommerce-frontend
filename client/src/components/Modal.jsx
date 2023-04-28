import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ handleClose, show, reviewModal, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main" id={reviewModal}>
        <div className='modal-content'>
          <div className='modal-close' type="button" onClick={handleClose}>✖</div>
          {children}
        </div>
      </section>
    </div>
  );
};

export default Modal;