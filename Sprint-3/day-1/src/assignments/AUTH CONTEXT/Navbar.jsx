import React from 'react'
import styles from "./Theme.module.css"
import {ThemeContext } from "../context/ThemeContext"

const Navbar = () => {
     const {toggleAuth,login,logout,isAuthorized} = React.useContext(ThemeContext)
  return (
    <div className={styles.Navbar}>
       <div>
           <h4><a>rg15697</a></h4>
       </div>
       <div style={{display:"flex",gap:"30px"}}>
            <h4><a>Home</a></h4>
            <h4><a>About</a></h4>
            <h4><a>SignIn/SignUP</a></h4>
            <button onClick={toggleAuth} ><h4>{` ${isAuthorized ? "logout" : 'login'}`}</h4></button>
       </div>
    </div>
  )
}

export default Navbar