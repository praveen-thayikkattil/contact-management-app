import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../features/store';
import { updateContact } from '../features/contacts/contactsSlice';

const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find(c => c.id === id)
  );

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  const goHome = () => {
    navigate('/');
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateContact({
      id: contact.id,
      name: contact.name,
      email: contact.email
    }));
    navigate('/');
  };

  return (
    <form className='p-4 flex flex-col' onSubmit={handleUpdate}>
      <input type='text' defaultValue={contact.name} className='border p-2' />
      <input type='email' defaultValue={contact.email} className='border p-2 mt-2' />
      {/* Display additional details */}

      <div className='flex mt-2'>
        <button className='border bg-gray-300 p-2' onClick={() => goHome()}>Cancel</button>
        <button type="submit" className='border bg-blue-400 p-2 ml-2'>Save</button>
      </div>
    </form>
  );
};

export default ContactDetails;
