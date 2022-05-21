import React from 'react'

const Child2 = ({value,handleChange}) => {
  return (
    <div><h3>child2: {value}</h3>
    <button onClick={handleChange} > multiply by 3</button>
    </div>
  )
}

export default Child2