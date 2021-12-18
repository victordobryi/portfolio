import React from 'react';
import { AiFillCheckCircle, AiFillExclamationCircle } from 'react-icons/ai';
import './Input.scss';

interface IInput {
  type: string;
  id: string;
  placeholder: string;
  name: string;
  reg: RegExp;
}

export const Input = ({ type, id, placeholder, name, reg }: IInput) => {
  const checkInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if (value === '') {
      setErrorFor(e.target, `${name} cannot be blank`);
    } else if (!isValidate(reg, value)) {
      setErrorFor(e.target, `${name} is not valid`);
    } else {
      setSuccessFor(e.target);
    }
  };

  const setErrorFor = (input: HTMLInputElement, message: string) => {
    const formControl = input.parentElement as HTMLDivElement;
    const small = formControl.querySelector('small') as HTMLDivElement;
    small.innerText = message;
    formControl.classList.add('error');
  };

  const setSuccessFor = (input: HTMLInputElement) => {
    const formControl = input.parentElement as HTMLDivElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
  };

  const isValidate = (regex: RegExp, inputValue: string) => {
    return regex.test(inputValue);
  };

  return (
    <div className="form-control" id={id}>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={(e) => checkInput(e)}
        formNoValidate
      />
      <AiFillCheckCircle className="check" />
      <AiFillExclamationCircle className="exclamation" />
      <small>Error message</small>
    </div>
  );
};
