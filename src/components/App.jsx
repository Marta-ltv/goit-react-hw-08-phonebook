
// import { useSelector } from 'react-redux';
// import { selectContacts } from 'redux/contacts/selectors';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts/Contacts';

export default function App() {
  // const { contacts } = useSelector(selectContacts);

  return (
    <Routes>
      <Route path="/" element>{<Layout/>}</Route>
       {/* <Route index element={<Home/>} */}
      <Route>{<Contacts/> }</Route>
      
   </Routes>
      
      
   
  );
}