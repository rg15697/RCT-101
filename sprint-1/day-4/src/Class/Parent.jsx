import React from 'react'
import Child2 from './Child2'
import Child1 from './Child1'
const Parent = () => {

    const [count,setCount] = React.useState(0);
    // console.log(count)

  return (
    <div style={{display:"flex",justifyContent:"center",gap:"50px" }}>
        
   <div>
   <h3>parent: {count}</h3>
         <button onClick={()=>setCount(count/3)} >Devide by 3</button>
   </div>
        <Child1 value={count} handleIncrement={()=>setCount(count+5)} handleDecrement={()=>setCount(count-5)} />
        <Child2 value={count} handleChange={()=>setCount(count*3)} />
    </div>
  )
}

export default Parent