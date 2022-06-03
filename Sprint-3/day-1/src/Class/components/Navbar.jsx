import React from 'react'
import {useContext} from "react"
import {AuthContext} from "./Context/AuthContext"
import Wishlist from "./Wishlist"
import {CartContext} from "./Context/CartContext"
import { ThemeContext } from './Context/ThemeContext'

const Navbar = () => {
    const {isAuthorized,login,logout} =useContext(AuthContext)
    const {isLight,toggleTheme} = React.useContext(ThemeContext)
    const {buy} = React.useContext(CartContext)
    return (
    <div>
        <h3>Navbar</h3>
        <button onClick={()=>{
            if(isAuthorized) logout();
            else login("R","Z");
        }}
       >
           {isAuthorized ? "Logout" : "Login"}
       </button>
       <button onClick={buy}>Buy</button>
       <button onClick={toggleTheme}>{`Make ${isLight ? "Dark" : 'Light'}`}</button>

        {isAuthorized && <Wishlist />}
    </div>
  )
}

export default Navbar