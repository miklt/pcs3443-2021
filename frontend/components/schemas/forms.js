const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegEx = /^[a-z\sA-Z0-9\W\w]+$/;
const usernameRegEx = /^[a-z\s0-9]+$/;
const BASE_URL = 'http://localhost:3000/api'
/* login schemas */
const FORM_LOGIN_DATA = {
    username: {
      value: '',
      label: 'Email',
      min: 10,
      max: 36,
      required: true,
      validator: {
        regEx: emailRegEx,
        error: 'Por favor, digite um email válido',
      },
    },
    password: {
      value: '',
      label: 'Password',
      min: 6,
      max: 36,
      required: true,
      validator: {
        regEx: passwordRegEx,
        error: 'Por favor, digite uma senha válida',
      },
    },
  };
  const FORM_REGISTER_DATA = {
    email: {
      value: '',
      label: 'Email',
      min: 10,
      max: 36,
      required: true,
      validator: {
        regEx: emailRegEx,
        error: 'Por favor, digite um email válido',
      },
    },
    username: {
        value: '',
        label: 'Email',
        min: 10,
        max: 36,
        required: true,
        validator: {
          regEx: usernameRegEx,
          error: 'Por favor, digite um username válido',
        },
    },
    password: {
      value: '',
      label: 'Password',
      min: 6,
      max: 36,
      required: true,
      validator: {
        regEx: passwordRegEx,
        error: 'Por favor, digite uma senha válida',
      },
    },
  };

  export {FORM_LOGIN_DATA,FORM_REGISTER_DATA,BASE_URL}