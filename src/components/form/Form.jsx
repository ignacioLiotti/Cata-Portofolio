import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './form.css'

function Form() {
  const [state, handleSubmit] = useForm("xyyoozgy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='lets@contact.com'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">Your Message</label>
      <textarea
        id="message"
        name="message"
        placeholder='Hi! I would like to talk about...'
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

export default Form