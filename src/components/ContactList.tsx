import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../features/store';
import { deleteContact } from '../features/contacts/contactsSlice';
import ContactCard from './ContactCard';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleView = (id: string) => {
    navigate(`/contact/${id}`);
  }

  const handleEdit = (id: string) => {
    navigate(`/contact/edit/${id}`);
  }

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    contacts.length ? <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-4">
       {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} handleView={handleView} handleEdit={handleEdit} handleDelete={handleDelete} />
      ))}
    </section>
    : <div className='flex justify-center mt-20'>
        <p className='bg-yellow-100 border-yellow-500 text-yellow-700 p-4'>No contacts found. Please add contacts using the Add Contact button.</p>
      </div>    
  );
};

export default ContactList;
