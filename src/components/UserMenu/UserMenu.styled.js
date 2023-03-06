import styled from '@emotion/styled';

export const Wrapper = styled.div`
display:flex;
align-items: center;
justify-content:center;
`;


export const Title= styled.p`
display:inline-block;
padding:12px;
align-items:center;
text-decoration:none;
font-family: sans-serif;
font-weight:700;
font-size:25px;
color:black;

&.active{
  color: red;
  text-decoration:underline;
}
`;