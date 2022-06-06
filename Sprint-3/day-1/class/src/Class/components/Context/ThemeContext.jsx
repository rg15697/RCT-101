import { createContext } from "react";
import React from "react";

export const ThemeContext = createContext()
export const ThemeProvider = ({children}) =>{


  const [theme,setTheme] = React.useState("light")
  const toggleTheme = ()=>{

      if(theme === "light"){
          setTheme("dark")
      }else setTheme("light")
  }
  
  return (
       <ThemeContext.Provider value = {{theme, isLight : theme === "light",toggleTheme}}>
           {children}
       </ThemeContext.Provider>

       
  )
}