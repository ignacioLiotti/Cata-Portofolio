import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Styled from 'styled-components';

import './form.css'

function Form() {
  const [state, handleSubmit] = useForm("xyyoozgy");
  if (state.succeeded) {
      return <Gracias>Gracias por contactarme!</Gracias>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='hablemos@contacto.com'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">Deja un mensaje</label>
      <textarea
        id="message"
        name="message"
        placeholder='Hola! Me gustaria hablar sobre...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='button' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

const Gracias = Styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 1rem;
`

export default Form