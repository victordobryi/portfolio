import React, { useLayoutEffect, useRef, useState } from 'react';
import { makeRandomArr } from '../../utils/utils';
import { SkillsData } from './SkillsData';

export const SkillsGallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [galleryOffsetTop, setGalleryOffsetTop] = useState(0);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setGalleryOffsetTop(targetRef.current.offsetTop);
    }
  }, []);

  const checkSlide = () => {
    const images = document.querySelectorAll<HTMLImageElement>('.grid-item');
    images.forEach((image) => {
      const slideInAt = window.scrollY + window.innerHeight - image.height / 3;
      const imageBottom = image.offsetTop + image.height + galleryOffsetTop;

      const isThirdShown = slideInAt > image.offsetTop + galleryOffsetTop;

      const isNotScrolledPast = window.scrollY < imageBottom;

      isThirdShown && isNotScrolledPast
        ? image.classList.add('active')
        : image.classList.remove('active');
    });
  };
  window.addEventListener('scroll', checkSlide);
  return (
    <div className="gallery" ref={targetRef}>
      <div className="gallery-inner">
        {SkillsData.sort(makeRandomArr).map(({ src, name }, i) => (
          <img className="grid-item" key={i} src={src} alt={name} />
        ))}
      </div>
    </div>
  );
};
