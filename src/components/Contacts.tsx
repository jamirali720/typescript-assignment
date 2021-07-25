import React, { useState } from 'react';
import Contact, { ContactDemo } from './Contact';

const Contacts = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contactList, setContactList] = useState<string[]>([])

   

    const handleAdd=()=> {
        setContactList([...contactList, name])
        setName('')
        setEmail('')
    }   
 
    return (
      <div>
        <h1> Contact List </h1>
        <div className="form">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Contact Name"
            value={name}
          />
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Contact Email"
            value={email}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        {contactList.map((person) => (
          <Contact name={person} key={person} ></Contact>
        ))}
        < ContactDemo name="jamir" email="kadam@gmail.com" />
      </div>
    );
};

export default Contacts;