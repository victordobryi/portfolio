import React, { Fragment } from 'react';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';

import './styles/main.scss';

export const App = () => (
  <Fragment>
    <Header />
    <main>
      <About />
    </main>
  </Fragment>
);

export default App;
