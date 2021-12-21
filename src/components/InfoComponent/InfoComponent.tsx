import React from 'react';
import './InfoComponent.scss';

interface IInfoBlock {
  title: string;
  subtitle: string;
}

export const InfoComponent = ({ title, subtitle }: IInfoBlock) => (
  <div className="info">
    <h2 className="info__title">
      {title}
      <mark>.</mark>
    </h2>
    <p className="info__subtitle">{subtitle}</p>
  </div>
);
