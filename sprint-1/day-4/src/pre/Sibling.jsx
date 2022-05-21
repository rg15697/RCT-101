import React from 'react'

const Child = ({value}) => (
    <div>
         <h3> Count : {value} </h3>
    </div>
)

const Button = ({ handleClick, label}) => (
    <button onClick={handleClick}>{label}</button>
)

const Sibling = () => {
    const [count,setCount] = React.useState(0)

    const handleChange = (value) =>{
        setCount(count+value)
    }
  return (
    <div>
        <h3>Sibling</h3>
        <Child
         value={count}
         handleIncrement={()=>handleChange(+1)}
         handleDecrement={()=>handleChange(-1)}
         />
         <Button label="+" handleClick={()=>handleChange(+1)} />
         <Button label="-" handleClick={()=>handleChange(-1)} />
    </div>
  )
}

export default Sibling