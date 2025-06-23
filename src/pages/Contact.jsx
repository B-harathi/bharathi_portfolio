import React from 'react';
import ContactForm from '../components/sections/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactForm preview={false} />
    </div>
  );
};

export default Contact;