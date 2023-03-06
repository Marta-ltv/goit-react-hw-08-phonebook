import { Form, FormLabel, FormInput} from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const formSubmit = e => {
    e.preventDefault();
    let result = true;
    contacts.forEach(elm => {
      if (elm.name === name) {
        alert(`${name} is already exist.`);
        resetForm();
        result = false;
      }
    });
    if (result) {
      dispatch(addContact({ name, number }));
      resetForm();
    }
  };


  return (
    <Form onSubmit={formSubmit}>
      <FormLabel htmlFor="name">
        Name
        <FormInput
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel  htmlFor="tel">
        Number
        <FormInput
          value={number}
          onChange={handleChange}
          name="number"
          placeholder="Number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <Button type="submit" variant="outlined">Add contact</Button>
    </Form>
  );
}