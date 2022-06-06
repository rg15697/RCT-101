import { createContext } from "react";
import React from "react"

export const CartContext = createContext()
export const CartContextProvider = ({children}) => {

    const [cartCount,setCartCount] = React.useState(0)

    const handleCartUpdate = (value) => {
        setCartCount(cartCount + value)
    }
    return <CartContext.Provider value={{cartCount,handleCartUpdate}} >
        {children}
    </CartContext.Provider>
} 
//value may be string obj or num or array