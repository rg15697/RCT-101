import React from 'react'

function Counter({initValue}) {
    const [count,setCount] = React.useState(initValue)
    const handleValue = (value) => {
        // if(count>=10){
        //     value = -5
        // }
        setCount(count+value)
    }
    const handleIncrement = ()=>{
        setCount(count+5)
    }
    const handleMultiplicationBy5 = () => setCount(count*5)
  return (
       <>
           <h1>Counter App</h1>
           <div>
               <h3 >Current Value : {count}</h3>
               <div>
                  <button onClick={()=>handleValue(+1)}>Increment</button>
                  <button onClick={()=>handleValue(-1)}>Decrement</button>
               </div>
               <div>
                 <button onClick={handleIncrement}>Increment by 5</button>
                 <button onClick={handleMultiplicationBy5}>multiply by 5</button>
                 <button onClick={() => setCount(count-5)}>Decrement by 5</button>
               </div>
           </div>
           
       </>
  )
}

export default Counter