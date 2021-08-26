import React, {useState, useEffect} from 'react';

import Contact from './Contact';
import contacts from './ContactsList';

import './contact.css'


function ContactsComponent() {
  const [contact,  setContact] = useState(contacts);
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const name = contacts.filter(person =>
      person.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      || person.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      || person.phone.toLowerCase().includes(searchTerm.toLowerCase()));
    
    setContact(name)
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  };
    return (
    <div className="App">
      <h1>Contacts</h1>
       <div>
         <input 
            type="text"  
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
       </div>
       <ul>
            {contact.map(item => <Contact key={item.id} {...item} />)}
        </ul>
    </div>
  );
}

export default ContactsComponent;
