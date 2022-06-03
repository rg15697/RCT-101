import React from 'react'
import Navbar from './components/Navbar'
import Body from "./components/Body"
import { ThemeProvider } from './context/ThemeContext'
import { ThemeContext } from './context/ThemeContext'

const ThemeComponent = () => {
    const {isLight} = React.useContext(ThemeContext)
  return (
    <div className={`style.${isLight ? 'Dark' : "Light"}`}>
        <h3>ThemeComponent</h3>
        <ThemeProvider>
            <Navbar />
            <Body/>
        </ThemeProvider>
    </div>
  )
}

export default ThemeComponent