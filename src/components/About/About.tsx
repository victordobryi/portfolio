import React, { useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import './About.scss';
import Avatar from '../../assets/images/tViN90-8B60-removebg-preview.png';
import { ModalContent } from '../Modal/ModalContent';

export const About = () => {
  const [active, setActive] = useState(false);

  const openModal = () => {
    setActive(!active);
  };

  return (
    <section className="about">
      <div className="_container">
        <div className="about-me">
          <div className="about__info">
            <h2 className="about__title">I am Victor Kasilkin.</h2>
            <p className="about__subtitle">
              I am 24 years old. I am a creative, forward-looking, hardworking,
              team player. Or, in a nutshell, a beginner frontend developer.
            </p>
            <div className="about__contacts">
              <p className="about__contacts-item">
                <span>Phone</span>
                <a href="tel:+375(44)5339728">+375(44)5339728</a>
              </p>
              <p className="about__contacts-item">
                <span>Email</span>
                <a href="mailto:kasilkina@mail.ru">kasilkina@mail.ru</a>
              </p>
              <p className="about__contacts-item">
                <span>Address</span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://goo.gl/maps/dddQ2B5tsiRPQXXi8"
                >
                  Partizanski 32
                </a>
              </p>
              <div className="about__contacts-item">
                <span>Social</span>
                <div>
                  <a
                    href="linkedin.com/in/victor-kasilkin/"
                    className="about__contacts-links"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    href="github.com/victordobryi"
                    className="about__contacts-links"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.instagram.com/victor.kosyak/"
                    className="about__contacts-links"
                  >
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="about__buttons">
              <button className="about__buttons-item dark" onClick={openModal}>
                Contact Me
              </button>
              <button className="about__buttons-item">Download CV</button>
            </div>
          </div>
          <div className="about__img">
            <div className="about__img-circle"></div>
            <img className="about__img-avatar" src={Avatar} alt="" />
          </div>
        </div>
      </div>
      <ModalContent active={active} setActive={setActive} />
    </section>
  );
};
