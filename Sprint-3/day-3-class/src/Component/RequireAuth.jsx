import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from '../Context/AuthContext'
import { useLocation } from 'react-router-dom'

const RequireAuth = () => {
    // const navigate = useNavigate()
    const {isAuth} = useContext(AuthContext)
    const {pathname} = useLocation()
  return isAuth ? (
    <div>RequireAuth</div>
  ) : (
    //   navigate('/login')

    // redirectional code
    <Navigate to = "/login" 
    state={{from :pathname}}
    replace />
  )
}

export default RequireAuth