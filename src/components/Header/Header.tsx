import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import './Header.scss';
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };
  return (
    <header className="header">
      <div className="_container">
        <div className="navigation">
          <h1 className="logo">
            <mark>V</mark>.K<mark>.</mark>
          </h1>
          <Navbar />
          <div onClick={handleDarkMode} role={'presentation'}>
            {isDarkMode ? (
              <BsFillMoonStarsFill />
            ) : (
              <BsSunFill color="#fef200" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
