import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {
    const {isAuth,logout} = React.useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = ()=>{
        if(isAuth) {
            logout()
           navigate("/")
        }else{
            navigate("/login")
        }
        
    }
  return (
    <div style={{padding:"10px",display:"flex",gap:"50px",justifyContent:"center"}}>Navbar
        <Link to="" >Home</Link>
        <Link to="/feeds">Feeds</Link>
        <button onClick={handleLogin}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  )
}

export default Navbar