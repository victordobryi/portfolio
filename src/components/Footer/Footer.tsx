import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import './Footer.scss';

export const Footer = () => (
  <footer className="footer">
    <div className="_container">
      <div className="footer__info">
        <h2 className="footer-logo">
          <mark>V</mark>.K<mark>.</mark>
        </h2>
        <ul className="footer__links">
          <a
            href="https://www.linkedin.com/in/victor-kasilkin"
            target="_blank"
            className="footer__links-item"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.github.com/victordobryi"
            target="_blank"
            className="footer__links-item"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.instagram.com/victor.kosyak"
            target="_blank"
            className="footer__links-item"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </ul>
        <div className="footer__copyright">Copyright 2021 Victor Kasilkin</div>
      </div>
    </div>
  </footer>
);
