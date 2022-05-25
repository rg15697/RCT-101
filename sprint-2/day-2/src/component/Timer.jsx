import React, { useEffect } from 'react'

const Timer = () => {
    const [time,setTime] = React.useState(10)
    
    React.useEffect(()=>{
        let id = setInterval(()=>{
            if(time<=0){
                clearInterval(id)
            }else{
                setTime(()=>time-1)
            }
        },1000)

        return ()=> {
            clearInterval(id)
        }
    },[time])
    return (
    <div>Count Down : {time}</div>
    // <button onClick={()=>setTimer(timer=>timer-1)} >-</button>
    // <button onClick={()=>setTimer(timer=>timer-1)} >-</button>
    )
}

export default Timer