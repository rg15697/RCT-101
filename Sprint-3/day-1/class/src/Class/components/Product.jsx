import React from 'react'
import {AuthContext} from "./Context/AuthContext"
import Cart from "./Cart"
const Product = () => {
    const {isAuthorized} = React.useContext(AuthContext)
  return (
    <div>
        <h3>Product</h3>
        {isAuthorized ? "loggIn" : 'LoggedOUT'}
        <Cart/>
    </div>
  )
}

export default Product