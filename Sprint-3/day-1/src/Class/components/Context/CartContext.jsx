import React,{createContext} from "react";
import {AuthContext} from "./AuthContext"

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [count,setCount] = React.useState(0)
    const {isAuthorized} = React.useContext(AuthContext)

    const addToCart = () =>{
        setCount(count+1)
    }

    const buy = ()=>{
        
        if (isAuthorized){
            console.log('can buy')
        }else{
            console.log("cann't buy without loogin in")
        }
    }

    return <CartContext.Provider value={{count,addToCart,buy}}>
        {children}
    </CartContext.Provider>
}