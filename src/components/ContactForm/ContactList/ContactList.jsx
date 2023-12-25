import React from 'react';

import css from './style.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <div className={css.container}>
      <h2 className={css.contacts}>Contacts List</h2>
      <div className={css.form}>
        <ul className={css.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.item}>
              {name} - {number}
              <button
                type="button"
                name="delete"
                onClick={() => onRemoveContact(id)}
                className={css.button}
              >
                Delete contact
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;