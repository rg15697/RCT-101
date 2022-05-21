import React from 'react'

function Counter() {
    const [count,setCount] = React.useState(0);
  return (
    <div>
        <h1>Counter</h1>
        <h3>{count}</h3>
           <button onClick={()=>setCount(count+1)} >Increment by 1</button>
           <button onClick={()=>setCount(count-1)} >Decrement by 1</button>
           <button onClick={()=>setCount(count*5)} >Multiply by 5</button>
    </div>
  )
}

export default Counter