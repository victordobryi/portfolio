import { emailReg, nameReg } from './Regexp';

export const FormData = [
  {
    type: 'text',
    id: 'name',
    placeholder: 'Your Name',
    name: 'Name',
    reg: nameReg
  },
  {
    type: 'email',
    id: 'email',
    placeholder: 'Your Email',
    name: 'Email',
    reg: emailReg
  }
];
