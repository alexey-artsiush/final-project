import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "rgb(76, 78, 85)",
    borderRadius: "8px"
  },
};

export const ModalWindow = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      
      <button onClick={openModal}>Удалить</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Вы уверены, что хотите удалить карточку?</h2>
        <button onClick={null}>Удалить</button>
        <button onClick={closeModal}>Отмена</button>
      </Modal>
    </div>
  );
}