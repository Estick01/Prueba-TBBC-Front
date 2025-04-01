import React, { useState, useEffect } from "react";
import ContactItem from "./ContactItem";
import AddContactForm from "./AddContactForm";
import { Contact } from "../../types/api";
import { deleteContact, getContacts } from "../../services/contactSerive";
import Modal from "./modal/Modal";
import './Contact.css';
import { useNavigate } from "react-router-dom";

const ContactList: React.FC = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const fetchedContacts = await getContacts();
        setContacts(fetchedContacts);
        setFilteredContacts(fetchedContacts);
      } catch (err: any) {
        setError("Error fetching contacts");
        
      }
    };
    fetchContacts();
  }, []);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      const results = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.phone.includes(searchQuery)
      );
      setFilteredContacts(results);
    } else {
      setFilteredContacts(contacts);
    }
  }, [searchQuery, contacts]);

  const handleDelete = async (id: number) => {
    try {
      await deleteContact(id);
      setContacts(contacts.filter((contact) => contact.id !== id));
      setFilteredContacts(filteredContacts.filter((contact) => contact.id !== id));
    } catch (err) {
      setError("Error deleting contact");
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <section className="List">
      <div className="expand">
        <div className="expand2">
          <div className="expand1">
            <h2>Contact List</h2>
            <div className="search" >
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by name or phone"
              />
            </div>
          </div>
          <div className="acctions">
            <button className="button" onClick={handleOpenModal}>Add Contacto</button>
            <button onClick={handleLogout} className="button">
              Logout
            </button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <AddContactForm setContacts={setContacts} />
        </Modal>
        <ul>
          {filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              handleDelete={handleDelete}
              setContacts={setContacts}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactList;
