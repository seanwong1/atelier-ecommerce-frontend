import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>✖</button>
      </section>
    </div>
  );
};

export default Modal;