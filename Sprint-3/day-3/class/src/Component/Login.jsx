import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


const Login = () => {
    const [loginCred,setLoginCred] = React.useState({})
    const {login} = React.useContext(AuthContext)
    const navigate= useNavigate()

    
    const onChange = (e) => {
       const{name ,value} = e.target;
       setLoginCred({
           ...loginCred,
           [name]:value
       })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin()
    }
    const handleLogin = () =>{
        navigate("/feeds")
    }
  
    return (
    <div>
        <h3>Login</h3>
      <form 
        style={{display:"flex",
                flexDirection:"columns",
                margin:"auto",
                gap:"10px",
                maxWidth:"200px"}}
            onSubmit={handleSubmit}
         >
      <input 
        type="text"
        placeholder='Enter email' 
        onChange={onChange}
     />
     <input 
        type="password"
        placeholder='Enter password' 
        onChange={onChange}
      />
    <button onClick={handleLogin} type="submit" >Login</button>
   </form>
    </div>
  )
}

export default Login