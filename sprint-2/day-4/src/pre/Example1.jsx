import React from 'react'
import styled from "styled-components"
const Wrapper = styled.div`
border:3px solid red;
h1{
    color:blue;
    @media all and (max-width:500px){
        color:black
    }
}
`
const A = styled.a`
border:solid teal 2px;
font-weight:800;
color:${(props) => (props.color === "green" ? "green" : "red")}
`

const Example1 = () => {
  return (
    <Wrapper>
        <h1>Styled Components</h1>
        <A color="geen" href='www.google.com' >Google</A>
         
    </Wrapper>
  )
}

export default Example1