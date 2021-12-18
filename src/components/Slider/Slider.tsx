import React from 'react';
import './Slider.scss';
import { SliderData } from './SliderData';

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__track">
          {SliderData.map(({ background }, i) => {
            return (
              <div
                className="slider__item"
                key={i}
                style={{ background: `url(${background})` }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="slider-buttons">
        <button className="btn-prev">prev</button>
        <button className="btn-next">next</button>
      </div>
    </div>
  );
};
