import React from 'react'

const Conc2 = () => {
    const [count,setCount] = React.useState(10)
  

    React.useState(()=>{
        const id  = setInterval(()=>{
            setCount((prev) => {
                if(prev===0){
                    clearInterval(id)
                    return prev
                }
                return prev-1;
            })
        },1000)
    },[])
     
  return (
    <div>
        <h3> Count: {count}</h3>  
    </div>
  )
}

export default Conc2