import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeLink = styled(NavLink)`
display:inline-block;
padding:12px;
align-items:center;
text-decoration:none;
font-family: sans-serif;
font-weight:700;
font-size:25px;
color:black;

&.active{
  color:lightgray;
  text-decoration:underline;
  display: inline-block;
margin: 0 0.5rem;
animation: heartBeat; 
animation-duration: 5s;
}
`;