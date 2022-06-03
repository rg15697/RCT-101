import React from 'react'
import {CartContext} from "./Context/CartContext"

const Wishlist = () => {
    const {count} = React.useContext(CartContext);
  return (
    <div>
        <h3>Wishlist : {count}</h3>
    </div>
  )
}

export default Wishlist