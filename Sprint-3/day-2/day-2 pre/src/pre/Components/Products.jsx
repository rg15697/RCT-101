import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Products = () => {
    const values=useParams()
    const navigate = React.useNavigate();
   return (
      <div>
              <div>Products</div>
             <button onClick={()=>{
                    navigate("/products/refrigeratos")
    }}>Submit</button> 
      </div>
  )
}

export default Products