import React, {createContext} from "react"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isAuth,setIsAuth] = React.useState(false)
    const {state} = useLocation()
    const navigate = useNavigate();


    const login = () => {
        setIsAuth(true)
        if(state.from){
            navigate(state.from, {replace:true})
        }
    }

    const logout = () => {
        setIsAuth(false)
        navigate("/home")
    }
    return <AuthContext.Provider value={{isAuth,login,logout}} >{children}</AuthContext.Provider>
}