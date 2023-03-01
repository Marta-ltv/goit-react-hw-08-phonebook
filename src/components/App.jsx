// import { lazy } from 'react';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import { AppBar } from './AppBar.js/AppBar';


// const Home = lazy(() => import('../pages/Home'));
// const Register = lazy(() => import('../pages/Register'));
// const Login = lazy(() => import('../pages/Login'));
// const Contacts = lazy(() => import('../pages/Contacts'));


export default function App() {

  return (
    <>
      <AppBar/>
    <Routes>
        <Route path="/" element={<Layout />}/>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/contacts" element={<Contacts />}/>
        
     
   </Routes>
    </>
    
      
      
   
  );
}