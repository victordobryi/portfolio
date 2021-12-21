import React from 'react';
import { Form } from '../Form/Form';
import { Modal } from './Modal';
import './ModalContent.scss';

interface IModalContent {
  active: boolean;
  setActive: (arg: boolean) => void;
}

export const ModalContent = ({ active, setActive }: IModalContent) => {
  return (
    <Modal active={active} setActive={setActive}>
      <div className="modal__inner">
        <h2 className="modal__title">Let’s work together</h2>
        <p className="modal__subtitle">
          Are you working on something great? I would love to help make it
          happen! Drop me a letter and start your project right now! Just do it.
        </p>
        <Form />
        <button
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
          }}
          className="about__buttons-item light-btn"
        >
          Back to CV
        </button>
      </div>
    </Modal>
  );
};
