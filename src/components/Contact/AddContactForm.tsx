import React, { useState } from "react";
import { Contact } from "../../types/api";
import { addContact } from "../../services/contactSerive";


const AddContactForm: React.FC<{ setContacts: React.Dispatch<React.SetStateAction<Contact[]>> }> = ({ setContacts }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = { name, email, phone };

    try {
      const response = await addContact(newContact);
      setContacts(prevContacts => [...prevContacts, response]);
      setName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      console.error("Error adding contact:", err);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Create contac</h1>
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
        <button type="submit">Save</button>
      </form>
    </section>

  );
};

export default AddContactForm;