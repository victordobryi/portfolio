import React from 'react';
import { InfoComponent } from '../InfoComponent/InfoComponent';
import { Slider } from '../Slider/Slider';
import './Education.scss';

export const Education = () => {
  return (
    <section className="education">
      <div className="_container">
        <div className="education-container">
          <InfoComponent
            title="Education"
            subtitle="In 2020 graduated from the Belarusian State University of Transport with a degree in electrical engineer.Graduated from Rolling scopes school courses (JS, React). Passed the video course JS + React on Udemy"
          />
          <Slider />
        </div>
      </div>
    </section>
  );
};
