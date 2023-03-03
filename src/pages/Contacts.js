import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import React from "react";
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';


export default function Contacts () {
    const { contacts } = useSelector(selectContacts);

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            {contacts.length > 0 && <Filter />}
            <ContactList />
        </>
    );
};

