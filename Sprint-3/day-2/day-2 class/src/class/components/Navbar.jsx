import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    
    const handleOnClick = (id) => {
        if(id==1){
            console.log('pro 1')
                navigate("/products/1")
        }
        if(id===2){
            navigate("/products/2")
        }
    }
  return (
    <div>
        <div><h2>Navbar</h2></div>
        <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>
        <h4><Link to="/" >Home</Link></h4>
        <h4><Link to="/about">About</Link></h4>
        <h4><Link to="/products" >Products</Link></h4>
        <button onClick={handleOnClick(1)} >go to product 1</button>
        <button onClick={handleOnClick(2)} >go to product 2</button>
        </div>
    </div>
  )
}

export default Navbar