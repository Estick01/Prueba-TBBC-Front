import React, { useState } from "react";
import { Contact } from "../../types/api";
import EditContactForm from "./EditContactForm";
import Modal from "./modal/Modal";


const ContactItem: React.FC<{ 
  contact: Contact; 
  handleDelete: (id: number) => void;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>; // ✅ Asegúrate de recibir setContacts
}> = ({ contact, handleDelete, setContacts }) => { 
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true); 
  };

  const handleCloseModal = () => {
    setIsEditing(false); 
  };
  

  return (
    <li>
      <div>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => handleDelete(contact.id!)}>Delete</button>
      </div>

      <Modal isOpen={isEditing} onClose={handleCloseModal}>
        <EditContactForm contact={contact} setIsEditing={setIsEditing} setContacts={setContacts} />
      </Modal>
    </li>
  );
};

export default ContactItem;
