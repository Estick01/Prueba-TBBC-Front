import React, { useState } from "react";
import { Contact } from "../../types/api";
import { updateContact } from "../../services/contactSerive";


const EditContactForm: React.FC<{
  contact: Contact;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}> = ({ contact, setIsEditing, setContacts }) => {
  const [name, setName] = useState<string>(contact.name);
  const [email, setEmail] = useState<string>(contact.email);
  const [phone, setPhone] = useState<string>(contact.phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedContact: Contact = { ...contact, name, email, phone };

    try {
      const response: any = await updateContact(contact.id!, updatedContact);

      setContacts((prevContacts) =>
        prevContacts.map((c) => (c.id === contact.id ? response.contact : c))
      );

      setIsEditing(false);
    } catch (err) {
      console.error("Error updating contact:", err);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Edit Contact</h2>
        <div className="inputbox">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Name</label>
        </div>
        <div className="inputbox">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>
        <div className="inputbox">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label>Phone</label>
        </div>
        <div className="acctions">
        <button type="submit">Save</button>
        <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </form>
    </section>
  );
}
export default EditContactForm;