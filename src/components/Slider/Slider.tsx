import React, { useLayoutEffect, useRef, useState } from 'react';
import './Slider.scss';
import { SliderData } from './SliderData';
import { SliderNavigation } from './SliderNavigation';

interface ISlider {
  slidesToShow: number;
  slidesToScroll: number;
  sliderIndents: number;
  marginRight: number;
  isIndents: boolean;
}

export const Slider = ({
  slidesToShow,
  slidesToScroll,
  sliderIndents,
  marginRight,
  isIndents
}: ISlider) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [sliderContainerWidth, setSliderContainerWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [specialHeightIndent, setSpecialHeightIndent] = useState(0);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setSliderContainerWidth(targetRef.current.clientWidth);

      if (window.screen.width < 769 && window.screen.width > 480) {
        setSpecialHeightIndent(150);
      } else if (window.screen.width >= 769 && window.screen.width < 1024) {
        setSpecialHeightIndent(175);
      } else if (window.screen.width <= 480) {
        setSpecialHeightIndent(90);
      } else {
        setSpecialHeightIndent(200);
      }
    }
  }, []);

  const sliderItemsCount: number = SliderData.length;

  isIndents ? (sliderIndents = slidesToShow - 1) : sliderIndents;
  const itemWidth: number =
    (sliderContainerWidth - sliderIndents * marginRight) / slidesToShow;

  const itemWidthWithMargin = itemWidth + marginRight;
  const movePosition: number = slidesToScroll * itemWidthWithMargin;

  const slickToCurrentSlide = (index: number) => {
    setPosition(-(itemWidth * index));
    setCurrentSlide(index + 1);
  };

  const nextSlide = () => {
    const sliderItemsLeft: number =
      sliderItemsCount -
      (Math.abs(position) + slidesToShow * itemWidthWithMargin) /
        itemWidthWithMargin;

    sliderItemsLeft >= slidesToScroll
      ? setPosition(position - movePosition)
      : setPosition(position - sliderItemsLeft * itemWidthWithMargin);
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    const sliderItemsLeft: number = Math.abs(position) / itemWidthWithMargin;

    sliderItemsLeft >= slidesToScroll
      ? setPosition(position + movePosition)
      : setPosition(position + sliderItemsLeft * itemWidthWithMargin);
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="slider">
      <div className="slider__container" ref={targetRef}>
        <div
          className="slider__track"
          style={{ transform: `translateX(${position}px)` }}
        >
          {SliderData.map(({ background }, i) => {
            return (
              <div
                className="slider__item"
                key={i}
                style={{
                  background: `url(${background})`,
                  minWidth: itemWidth,
                  marginRight: marginRight,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  height: itemWidth - specialHeightIndent
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <SliderNavigation
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        currentSlide={currentSlide}
        slickToCurrentSlide={slickToCurrentSlide}
      />
    </div>
  );
};
