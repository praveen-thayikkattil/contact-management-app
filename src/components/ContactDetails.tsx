import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../features/store';

const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find(c => c.id === id)
  );

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  return (
    <div className='p-4'>
      <h2 className='font-bold'>{contact.name}</h2>
      <p>{contact.email}</p>
      {/* Display additional details */}
    </div>
  );
};

export default ContactDetails;
