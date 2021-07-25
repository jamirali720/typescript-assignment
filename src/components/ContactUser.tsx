import React, { useState } from 'react';
import ContactUserDetail from './ContactUserDetail';

interface IContact {
    name: string, 
    email?: string
}

const ContactUser = () => {
    const [contact, setContact] = useState<IContact>({
        name: '', 
        email: ''
    })
    const [contactList, setContactList] = useState<IContact[]>([])

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }

    const handleAddClick=()=> {
        setContactList([...contactList, contact])
        setContact({ 
            name: '',
            email: ''
        })
    }

       const handleRemove = (email: string) => {
         const newContactList = contactList.filter((cl) => cl.email !== email);
         setContactList(newContactList)
       };
 
     return (
        <div>
            <div className="form">
                <input
                 type="text" 
                 placeholder="Contact Name"
                 name="name"
                 value={contact.name}
                 onChange={handleChange}
                 />
                <input
                 type="text" 
                 placeholder="Contact Email"
                 name="email"
                 value={contact.email}
                 onChange={handleChange}
                 />
                 <button onClick={handleAddClick}>Add Contact</button>
            </div>

            {
                contactList.map(contactPerson => <ContactUserDetail name={contactPerson.name} email={contactPerson.email} handleRemove={handleRemove}></ContactUserDetail>)
            }
        </div>
    );
};

export default ContactUser;