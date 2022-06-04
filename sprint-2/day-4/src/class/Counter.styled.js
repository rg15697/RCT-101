import styled from "styled-components"


export const BodyWrapper = styled.div`
width:90%;
margin:auto
border:solid black 2px;`
export const MainHead = styled.h1`
color:red`

export const CounterDiv = styled.h3`
color:green;
`

export const Button = styled.button`
border:none;
border-radius:5px;
color:white;
font-weight:600;
font-size:16px;
letter-spacing:1.5px;
background-color:black;
padding:15px 25px;
cursor:pointer
`

export const ButtonWrapperDiv=styled.div`
display:flex;
flex-direction:${(props) =>props.flexDirection || 'column'};
gap:30px;
justify-content:center`
   