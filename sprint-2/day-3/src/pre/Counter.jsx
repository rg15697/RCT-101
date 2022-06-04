import React from 'react'

const Counter = () => {
    const [count,setCount] = React.useState(0)
    const handleClick = e => setCount(count+2)
  return (
    <div style={{border:"green solid 4px"}}>
        <h2 style={{color:"green"}}>counter</h2>
        <h3>Count : {count}</h3>
        <button onClick={handleClick} > +2 </button>
        <button onClick={()=>setCount(count*2)} > *2 </button>

    </div>
  )
}

export default Counter