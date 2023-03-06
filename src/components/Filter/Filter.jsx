import { Form, FormLabel, FormInput } from "./Filter.styled";
import { useSelector, useDispatch } from 'react-redux';
import { contactFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterChange = e => {
    dispatch(contactFilter(e.currentTarget.value));
  };


  return (
   <Form>
  <FormLabel>
    Find contacts by Name
     <FormInput
      type="text"
      value = {filter}
      placeholder="Search contact"
      onChange={filterChange}
      autoComplete="off"
    />
      </FormLabel>
      </Form>
);
};
    


