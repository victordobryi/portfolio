import React from 'react';
import { InfoComponent } from '../InfoComponent/InfoComponent';
import './Portfolio.scss';
import { PortfolioSlider } from './PortfolioSlider';

export const Portfolio = () => (
  <section className="portfolio">
    <div className="_container">
      <div className="portfolio-container">
        <InfoComponent
          title="Portfolio"
          subtitle="Not all of my projects are present in this slider. I will try to add the rest of the work as soon as possible."
        />
        <PortfolioSlider />
      </div>
    </div>
  </section>
);
