import React from 'react'
import {CartContext} from "./Context/CartContext"

const Cart = () => {
    const {addToCart} = React.useContext(CartContext)
  return (
    <div>Cart
        <button  onClick={addToCart} >
             add to cart
        </button>
    </div>
  )
}

export default Cart