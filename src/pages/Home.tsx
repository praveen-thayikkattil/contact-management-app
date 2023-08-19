import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const Home: React.FC = () => {
  return (
    <>
      <ContactForm />
      <ContactList />
    </>
  );
};

export default Home;
