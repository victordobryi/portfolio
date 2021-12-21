import React, { useEffect, useState } from 'react';
import './SliderNavigation.scss';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { SliderData } from './SliderData';

interface ISliderNavigation {
  prevSlide: () => void;
  nextSlide: () => void;
  currentSlide: number;
  slickToCurrentSlide: (index: number) => void;
}

export const SliderNavigation = ({
  prevSlide,
  nextSlide,
  currentSlide,
  slickToCurrentSlide
}: ISliderNavigation) => {
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);

  useEffect(() => {
    setIsPrevDisabled(currentSlide === 1);
    setIsNextDisabled(currentSlide === SliderData.length);
  });

  return (
    <div className="slider__nav">
      <div className="slider__counter">
        <span>{currentSlide}</span>
        <span>/</span>
        <span>{SliderData.length}</span>
      </div>
      <div className="slider__pagination">
        {SliderData.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => slickToCurrentSlide(i)}
              onKeyPress={() => ''}
              role={'presentation'}
              className="slider__pagination-item"
              style={{
                background: currentSlide === i + 1 ? 'black' : 'transparent'
              }}
            ></div>
          );
        })}
      </div>
      <div className="slider__buttons">
        <button
          disabled={isPrevDisabled}
          className="btn-prev slider__btn"
          onClick={prevSlide}
        >
          <AiOutlineArrowLeft className="slider__icon" />
        </button>
        <button
          disabled={isNextDisabled}
          className="btn-next slider__btn"
          onClick={nextSlide}
        >
          <AiOutlineArrowRight className="slider__icon" />
        </button>
      </div>
    </div>
  );
};
