import React, { useEffect, useState } from 'react';
import { FormData } from '../Input/FormData';
import { Input } from '../Input/Input';
import { Modal } from './Modal';
import './ModalContent.scss';

interface IModalContent {
  active: boolean;
  setActive: (arg: boolean) => void;
}

export const ModalContent = ({ active, setActive }: IModalContent) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    console.log(isFormValid);
  });

  const checkInputs = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const stateArr: string[] = [];

    const inputs = document.querySelectorAll<HTMLInputElement>('.form-control');
    inputs.forEach((input) => {
      if (input.classList.contains('error')) {
        stateArr.push('false');
      } else if (
        !input.classList.contains('error') &&
        input.classList.contains('success')
      ) {
        stateArr.push('true');
      }
    });

    if (stateArr.length > 1) {
      if (stateArr.includes('false')) {
        setIsFormValid(false);
      } else if (!stateArr.includes('false') && stateArr.includes('true')) {
        setIsFormValid(true);
      }
    }
  };
  return (
    <Modal active={active} setActive={setActive}>
      <div>
        <h2 className="modal__title">Let’s work together</h2>
        <p className="modal__subtitle">
          Are you working on something great? I would love to help make it
          happen! Drop me a letter and start your project right now! Just do it.
        </p>
        <form className="form">
          <div className="form__block">
            <div className="form__inputs">
              {FormData.map(({ name, placeholder, type, id, reg }, i) => (
                <Input
                  key={i}
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  name={name}
                  reg={reg}
                />
              ))}
            </div>
            <textarea
              className="modal__textarea"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="form__buttons">
            <button
              type="submit"
              onClick={(e) => checkInputs(e)}
              className="about__buttons-item dark"
            >
              Send Message
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setActive(false);
              }}
              className="about__buttons-item "
            >
              Back to CV
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
