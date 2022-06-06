import React from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => {

    const [isAuthorized, setIsAuthorized] = React.useState(false);

    const login = (username,password) => {
        if(username && password){
            setIsAuthorized(true)
        }
    }

    const logout =()=>{
        setIsAuthorized(false)
    }


    return (
        <AuthContext.Provider value={{isAuthorized,login,logout}} >{children}</AuthContext.Provider>
    )
}