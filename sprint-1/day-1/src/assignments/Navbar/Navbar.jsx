import React from 'react'
import Logo from './components/Logo'
import Link from './components/Link'
import Button from './components/Button'

function Navbar() {
    let arr = [
        {address:"./#", text:"Services"},
        {address:"./#", text:"Projects"},
        {address:"./#", text:"About"}

    ]
  return (
    <div style={{height:"30px",width:"100%",display:"flex", justifyContent:"space-around", backgroundColor:"#24252a",color:'white'}} >
        <Logo />
          <div>
          {
                       arr.map((elem) => (
                        <Link {...elem} />
                    ))
           }
          </div>
        <Button />
    </div>
  )
}

export default Navbar