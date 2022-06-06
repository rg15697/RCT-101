import React from "react"
import './App.css';

// =======================Pre===============================


// import Body from "./pre/Body"
// import {CartContextProvider} from "./pre/Contexts/CartContext"


// =========================class==========================
// import Counter from "./Class/Counter"


// import Navbar from './Class/components/Navbar';
// import Body from "./Class/components/Body"
// import { CartProvider } from './Class/components/Context/CartContext';
// import { AuthProvider } from './Class/components/Context/AuthContext';
//  import { ThemeContext, ThemeProvider } from './Class/components/Context/ThemeContext';


// =================================================Assignments======================================

import ThemeComponent from "./assignments/THEME CONTEXT/ThemeComponent";


function App() {
    // const {isLight} = React.useContext(ThemeContext)
    //     console.log(isLight)
  return (
    //  <div className={`App ${isLight ? "light" : "dark"}`} >



        <div className="App"> 


    {/*=================================== pre ===================================*/}
                     {/* <CartContextProvider>
                            <Body />
                      </CartContextProvider>  */}
  
{/*  ====================================calss================================ */}

               {/* <Counter /> */}

    

 {/* <ThemeProvider>
    <AuthProvider>
      <CartProvider>
         <Navbar />
         <Body />
      </CartProvider>
    </AuthProvider>
 </ThemeProvider>  */}

 {/* ===================================Assignments================================= */}
         <h2>Assignments</h2>
         {/* <ThemeComponent /> */}
         
</div> 
  
  );
}

export default App;
