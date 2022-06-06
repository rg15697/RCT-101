import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const [product,setProduct] = React.useState({})
    const {id} = useParams()
    React.useEffect(()=>{
        if(id){
            fetch(`http://localhost:8080/products/${id} `)
            .then((res) => res.json()
            .then((data) =>setProduct(data)))
        }
    },[id])
  return (
    <div>
        <h3>Product</h3>
        <div>Product Id : {id}</div>
        <div>{product.name}</div>
    </div>
  )
}

export default Product