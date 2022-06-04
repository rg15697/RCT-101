import React from 'react'
import styled from "styled-components"

const NavbarWrapper=styled.div`
position:relative;
height:80px;
margin-right:0px;
background-color:grey;`

const Logo = styled.div`
position:absolute;
top:10px;
left:30px;
height:60px;

@media all and (max-width:520px){
    left:15px;
}`

const ResourceList = styled.div`
font-weight:300;
position:absolute;
top:22px;
right:40px;
letter-spacing:1px;

@media all and (max-width:520px){
    right:15px;
}
`
const Button = styled.button`
font-size:14px;
letter-spacing:1.4px;
border:none;
padding:7px 30px;
font-weight:600;
cursor:pointer;
height:30px;
text-align:center
border-radius:2px`

const A = styled.a`
text-decoration:none;
font-size:20px;
color:white;
margin-left:50px;
font-weight:700;
cursor:pointer;

@media all and (max-width:720px){
font-size:16px;
color:white;
margin-left:15px;
}
@media all and (max-width:520px){
font-size:12px;
color:white;
margin-left:15px;
}
`

const Navbar = () => {
    document.title=`Navabar`
  return (
    <NavbarWrapper>
        <Logo>
            <img height="60px" width="120px" src="https://avatars.githubusercontent.com/u/51109994?s=280&v=4" alt="" />
        </Logo>
        <ResourceList >
            <Button>Try</Button>
            <A >Home</A>
            <A>About</A>
            <A>FAQs</A>
            <A>Login</A>
        </ResourceList>
    </NavbarWrapper>
  )
}

export default Navbar