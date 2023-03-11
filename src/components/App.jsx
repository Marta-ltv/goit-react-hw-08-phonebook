import { lazy } from 'react';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';


const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));


export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <br>Fetching user data...</br>
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/goit-react-hw-08-phonebook" element={<Home />} />
        <Route path="/register" element={<RestrictedRoute component={Register} redirectTo="/contacts" />}/>
          <Route path="/login" element={<RestrictedRoute component={Login} redirectTo="/contacts" />}/>
          <Route path="/contacts" element={<PrivateRoute component={Contacts} redirectTo="/login" />}/>
     </Route>
   </Routes>
  );
}