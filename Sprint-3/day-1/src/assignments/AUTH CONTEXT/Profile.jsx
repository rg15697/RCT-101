import React from 'react'
import { AuthContext } from './AuthContext/AuthContext'

const Profile = () => {

    const {isAuthorized} = React.useContext(AuthContext)
    if(isAuthorized) {
            let res =await fetch('https://reqres.in/api/register')
            let data = res.json();
            console.log(data)
    }
  return isAuthorized ? (
    <div>
         <h4>Name : {data[0].name} </h4>
         <h4>Year : {data[0].yaear}</h4>
    </div>
  ) : (
      <div>Not Logged in</div>
  )
}

export default Profile