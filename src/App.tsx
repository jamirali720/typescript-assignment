import React from 'react';
import './App.css';
import Contacts from './components/Contacts';
import ContactUser from './components/ContactUser';

function App() {
  return (
    <div className="App">
      <Contacts></Contacts>
      <h1> here is contactList array method</h1>
      <ContactUser></ContactUser>
    </div>
  );
}

export default App;
