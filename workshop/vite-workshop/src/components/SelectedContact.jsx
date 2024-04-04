import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

// export default function ContactList() {
//     const [selectedContactId, setSelectedContactId] = useState(null);
// }

const SelectedContact = ({ selectedContactId }) => {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const data = await response.json();
                setContact(data);
            } catch (error) {
                console.error('Error fetching contact:', error)
            }
        };

    //     if (selectedContactId) {
    //         fetchContact();
    //     }
    // }, [selectedContactId])

        fetchContact();
    }, [selectedContactId]);

  const handleGoBack = () => {
    setSelectedContactId(null); 
  };

return (
    <div>
        <h2>Contact Details</h2>
        {contact && (
            <div>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>Address:</strong> {contact.address && `${contact.address.street}, ${contact.address.city}, ${contact.address.zipcode}`}</p>
          <p><strong>Company:</strong> {contact.company && contact.company.name}</p>
        {/* <Link to="./src/App.jsx"> */}
          <button onClick={handleGoBack}>Go Back</button>
        {/* </Link> */}
    </div>
            
        )}
    </div>
)
}

export default SelectedContact;