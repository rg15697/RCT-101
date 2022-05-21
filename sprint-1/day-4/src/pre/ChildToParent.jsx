import React from 'react'

const Child = ({value,handleDecrement,handleIncrement}) => (
    <div>
         <h3> Count : {value} </h3>
         <div>
             <button onClick={handleIncrement} >+</button>
             <button onClick={handleDecrement} >-</button>
         </div>
    </div>
)
const ChildToParent = () => {
    const [count,setCount] = React.useState(0)
    const handleChange = (value) =>{
        setCount(count+value)
    }
  return (
    <div>
        <h3>ChildToParent</h3>
        <Child
         value={count}
         handleIncrement={()=>handleChange(+1)}
         handleDecrement={()=>handleChange(-1)}
         />
    </div>
  )
}
export default ChildToParent