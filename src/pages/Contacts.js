import React from "react";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { Title, ContactsTitle } from "./Contacts.styled";


export default function Contacts () {
    const { contacts } = useSelector(selectContacts);

    return (
        <>
            <Title>Phonebook</Title>
            <ContactForm />
            <ContactsTitle>Contacts</ContactsTitle>
            {contacts.length > 0 && <Filter />}
            <ContactList />
        </>
    );
};

