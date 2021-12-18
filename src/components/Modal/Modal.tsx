import React, { Fragment, ReactElement } from 'react';
import './Modal.scss';

interface IModal {
  active: boolean;
  setActive: (arg: boolean) => void;
  children: ReactElement;
}

export const Modal = ({ active, setActive, children }: IModal) => {
  return (
    <Fragment>
      <div
        className={active ? 'modal active' : 'modal'}
        onClick={() => setActive(false)}
        onKeyPress={() => ''}
        role={'presentation'}
      >
        <div
          className={active ? 'modal__content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}
          onKeyPress={() => ''}
          role={'presentation'}
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
};
