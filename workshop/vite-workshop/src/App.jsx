import { useState } from 'react'
import './App.css'
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact.jsx";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className='App'>
    {selectedContactId ? (
      <SelectedContact selectedContactId={selectedContactId} />
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId} />
    )}
    </div>
  )
}

export default App;