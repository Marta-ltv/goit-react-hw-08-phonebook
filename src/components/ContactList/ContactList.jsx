import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  ContactsList,
  ContactListItem,
  DeleteButton
} from './ContactList.styled';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';


export default function ContactList() {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  

  return (
    <ContactsList>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => (
         
            <ContactListItem  key={id}>
            <p>
              {name}: {number}
            </p>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ DeleteButton>
          </ContactListItem>
        ))}
    </ContactsList>
  );
};



