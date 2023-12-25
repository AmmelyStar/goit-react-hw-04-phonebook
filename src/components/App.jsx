import React, { useState, useEffect } from 'react';
import css from './ContactForm/style.module.css'
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from  './ContactForm/ContactList/ContactList';

const contactsPhone = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(window.localStorage.getItem('contactsPhone'));
     return storedContacts || contactsPhone;
  });


  const [filter, setFilter] = useState('');


   
  const addContact = newContact => {
    const isNameExist = contacts.some(({name}) =>
      name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };


  const onChangeFilter = evt => {
     setFilter(evt.target.value);
  };

    const removeContact = contactId => {
      setContacts((prevContacts) => 
      prevContacts.filter(({ id }) => id !== contactId)
   );
  };



  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

 

    return (
      <>
        <div>
          <h1>Phonebook</h1>

          <ContactForm
              addContact={addContact} />

          <h2 className={css.app}>Contacts</h2>
          <Filter
            name="filter"
            value={filter}
            onChangeFilter={onChangeFilter}
          />
          <ContactList
            contacts={filteredContacts}
            onRemoveContact={removeContact}
          />
        </div>
      </>
    );
  }


export default App;