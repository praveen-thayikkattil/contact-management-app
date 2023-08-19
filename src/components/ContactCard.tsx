const ContactCard: React.FC<{
  contact: { id: string; name: string; email: string },
  handleView: (id: string) => void,
  handleEdit: (id: string) => void,
  handleDelete: (id: string) => void;
}> = ({ contact, handleView, handleEdit, handleDelete }) => {
    return (
      <div className="bg-white rounded-md shadow-md p-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">{contact.name}</h3>
          <p className="text-gray-600">{contact.email}</p>
        </div>

        <div className="flex space-x-0">
          <button onClick={() => handleView(contact.id)} className="bg-blue-500 hover:bg-blue-600 text-white py-0 px-2 text-sm">
            View
          </button>
          <button onClick={() => handleEdit(contact.id)} className="bg-yellow-500 hover:bg-yellow-600 text-white py-0 px-2 text-sm">
            Edit
          </button>
          <button onClick={() => handleDelete(contact.id)} className="bg-red-500 hover:bg-red-600 text-white py-0 px-2 text-sm">
            Delete
          </button>
        </div>
      </div>
    );
  };

  export default ContactCard;