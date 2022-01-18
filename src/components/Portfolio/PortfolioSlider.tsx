import React, { useState } from 'react';
import { PortfolioData } from './PortfolioData';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

export const PortfolioSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isVideoEntered, setIsVideoEntered] = useState(false);

  let height = 500;
  if (window.screen.width <= 768) {
    height = 300;
  }

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
    <div className="portfolio__slider">
      <div
        className="portfolio__info"
        style={{
          top: `-${(PortfolioData.length - 1) * height}px`,
          transform: `translateY(${activeSlideIndex * height}px)`
        }}
      >
        {PortfolioData.map(({ background, subtitle, title }, i) => (
          <div
            key={i}
            className="portfolio__item"
            style={{ background: background }}
          >
            <div className="portfolio__item-info">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="portfolio__projects"
        style={{
          transform: `translateY(-${activeSlideIndex * height}px)`
        }}
      >
        {reversedData.map(({ link, image, video }, i) => (
          <a key={i} target="_blank" href={link} rel="noreferrer">
            <div
              style={{ backgroundImage: `url(${image})` }}
              onMouseEnter={() => setIsVideoEntered(true)}
              onMouseLeave={() => setIsVideoEntered(false)}
            >
              <video
                src={video}
                loop
                autoPlay={false}
                muted
                style={{
                  visibility: isVideoEntered ? 'visible' : 'hidden',
                  opacity: isVideoEntered ? '1' : '0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.play();
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.currentTime = 0), e.currentTarget.pause();
                }}
              >
                <track default kind="captions" />
              </video>
            </div>
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
