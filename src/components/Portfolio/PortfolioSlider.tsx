import React, { useRef, useState } from 'react';
import { PortfolioData } from './PortfolioData';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import './PortfolioSlider.scss';

export const PortfolioSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const heightRef = useRef<HTMLDivElement>(null);

  const height = 600;

  const nextSlide = () => {
    setActiveSlideIndex(
      activeSlideIndex + 1 >= PortfolioData.length ? 0 : activeSlideIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveSlideIndex(
      activeSlideIndex - 1 < 0 ? PortfolioData.length - 1 : activeSlideIndex - 1
    );
  };

  const reversedData = [...PortfolioData].reverse();

  return (
    <div className="portfolio__slider" ref={heightRef}>
      <div
        className="portfolio__info"
        style={{
          top: `-${(PortfolioData.length - 1) * 600}px`,
          transform: `translateY(${activeSlideIndex * height}px)`
        }}
      >
        {PortfolioData.map(({ background, subtitle, title }, i) => (
          <div
            key={i}
            className="portfolio__item"
            style={{ background: background }}
          >
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        ))}
      </div>
      <div
        className="portfolio__projects"
        style={{
          transform: `translateY(-${activeSlideIndex * height}px)`
        }}
      >
        {reversedData.map(({ link, image }, i) => (
          <a key={i} target="_blank" href={link} rel="noreferrer">
            <div style={{ backgroundImage: `url(${image})` }}></div>
          </a>
        ))}
      </div>
      <div className="portfolio__controls">
        <button className="down-button" onClick={prevSlide}>
          <AiOutlineArrowDown />
        </button>
        <button className="up-button" onClick={nextSlide}>
          <AiOutlineArrowUp />
        </button>
      </div>
    </div>
  );
};
