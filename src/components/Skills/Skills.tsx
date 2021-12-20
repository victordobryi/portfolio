import React from 'react';
import { InfoComponent } from '../InfoComponent/InfoComponent';
import './Skills.scss';
import { SkillsGallery } from './SkillsGallery';

export const Skills = () => {
  return (
    <section className="skills">
      <div className="_container">
        <div className="skills-container">
          <InfoComponent
            title="Skills"
            subtitle="Creating web and mobile applications
Maintaining, optimizing, troubleshooting, and improving websites
Implementation of apps and landing pages from concept through deployment"
          />
          <SkillsGallery />
        </div>
      </div>
    </section>
  );
};
