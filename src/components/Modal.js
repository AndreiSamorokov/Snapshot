import React, { useState } from "react"; 

const Modal = ({ img, onSelecImage }) => {

    const closeModal = () => {
        onSelecImage('');
    }

    return (
        <div className="modal">
            <button onClick = { closeModal } >
                Close Modal
            </button>
        </div>
      );

  
}

export default Modal