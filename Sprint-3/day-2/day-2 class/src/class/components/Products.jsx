import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Products = () => {
    const [products ,setProducts] =React.useState([])

    React.useEffect(()=>{
        const fetchProducts = async ()=> {
            let res = await fetch("http://localhost:8080/products")
            let data= await res.json()
            setProducts(data)
            console.log(products)
        }
        fetchProducts()
    },[]);
   

  return (
    <div>
        <h2>Products : {" "}</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
            <Outlet />
         <div>
         {products.map((elem) => (
           <div key={elem.id}>
               <Link to={`/products/${elem.id}`}>{elem.name}</Link>
           </div>
        ))}
         </div>
         <Outlet />
        </div>
     
    </div>
  )
}

export default Products