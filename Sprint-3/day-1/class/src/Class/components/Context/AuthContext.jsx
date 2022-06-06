import React, {createContext} from "react"
export const AuthContext = createContext();
export const AuthProvider = ({children}) =>{

    const [isAuthorized,setIsAuthorized] = React.useState(false)
    
   
    const login = (username,password) => {
        if(username && password){
            setIsAuthorized(true)
        }
    }

    const logout =()=>{
        setIsAuthorized(false)
    }
    const toggleAuth = () =>{
        if(isAuthorized) setIsAuthorized(false)
        else setIsAuthorized(true)
    }

    return (
        <AuthContext.Provider value={{isAuthorized,login,logout,data}}>
            {children}
        </AuthContext.Provider>
    )
}