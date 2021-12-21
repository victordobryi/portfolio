import React, { Fragment, useState } from 'react';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { Education } from './components/Education/Education';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Loader } from './components/Loader/Loader';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Skills } from './components/Skills/Skills';

import './styles/main.scss';

export const App = () => {
  const [isSpinner, setIsSpinner] = useState(true);

  window.onload = () => setIsSpinner(false);

  return (
    <Fragment>
      {isSpinner ? (
        <Loader isSpinner={isSpinner} />
      ) : (
        <div>
          <Header />
          <main>
            <About />
            <Education />
            <Skills />
            <Portfolio />
            <Contacts />
          </main>
          <Footer />
        </div>
      )}
    </Fragment>
  );
};

export default App;
