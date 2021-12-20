import React, { Fragment } from 'react';
import { About } from './components/About/About';
import { Education } from './components/Education/Education';
import { Header } from './components/Header/Header';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Skills } from './components/Skills/Skills';

import './styles/main.scss';

export const App = () => (
  <Fragment>
    <Header />
    <main>
      <About />
      <Education />
      <Skills />
      <Portfolio />
    </main>
  </Fragment>
);

export default App;
