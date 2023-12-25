import css from './style.module.css'
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = (event) => {
    const { name, value } = event.target;
     name === 'name' ? setName(value) : setNumber(value);
    
    };
    
    
 const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
      };
      addContact(newContact);

      setName('');
    setNumber('');
        };

        return (
         <div>
            <form className={css.formContainer} onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
          
              required
            />
          </label>
          <label>
            Number:
                        <input
                            className={css.formInput}
              type="tel"
              name="number"
              value={number}
             onChange={handleChange}
             
              required
            />
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </form>
        </div>
        
    )
    }



 export default ContactForm;