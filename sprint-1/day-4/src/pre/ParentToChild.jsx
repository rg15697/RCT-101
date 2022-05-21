import React from 'react'

const Child = ({value}) => <h3> Count : {value} </h3>
const ParentToChild = () => {
    const [count,setCount] = React.useState(0)
  return (
    <div>
        <h3>ParentToChild</h3>
        <Child value={count} />
        <button onClick={()=>setCount(count+1)} >+</button>
        <button onClick={()=>setCount(count-1)} >-</button>
    </div>
  )
}

export default ParentToChild