import React from 'react';
import { Form } from '../Form/Form';
import { InfoComponent } from '../InfoComponent/InfoComponent';
import './Contacts.scss';

export const Contacts = () => (
  <section className="contacts">
    <div className="_container">
      <div className="section-container">
        <InfoComponent
          title="Contacts"
          subtitle="Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it"
        />
        <div className="contacts-form">
          <Form />
        </div>
      </div>
    </div>
  </section>
);
