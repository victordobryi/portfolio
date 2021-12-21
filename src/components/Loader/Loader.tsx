import React from 'react';
import './Loader.scss';

interface ILoader {
  isSpinner: boolean;
}

export const Loader = ({ isSpinner }: ILoader) => {
  return <div>{isSpinner ? <div className="loader" /> : null}</div>;
};
