import React from 'react'
import {CartContext} from "../pre/Contexts/CartContext"

const Navbar = () => {
    const {cartCount} = React.useContext(CartContext);
  return (
    <div>
         Cart : {cartCount}
    </div>
  )
}

export default Navbar