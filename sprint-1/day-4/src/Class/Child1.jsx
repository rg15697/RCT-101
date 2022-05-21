import React from 'react'

const Child1 = ({value,handleIncrement,handleDecrement}) => {
   
  return (
    <div>
        <h3>child1: {value}</h3>
        <button onClick={handleIncrement} >+</button> 
        <button onClick={handleDecrement} >-</button> 
    </div>
  )
}

export default Child1