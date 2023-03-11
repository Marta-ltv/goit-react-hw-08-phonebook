import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import 'animate.css';

export const RegisterLink = styled(NavLink)`
display:inline-block;
padding:12px;
align-items:center;
text-decoration:none;
font-family: sans-serif;
font-weight:700;
font-size:25px;
color:black;

&.active{
  color: lightgray;
  text-decoration:underline;

display: inline-block;
margin: 0 0.5rem;
animation: backInDown; 
animation-duration: 2s;
}
`;