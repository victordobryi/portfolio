import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <div className="_container">
      <div className="navigation">
        <h1 className="logo">
          <mark>V</mark>.K<mark>.</mark>
        </h1>
        <Navbar />
      </div>
    </div>
  </header>
);
