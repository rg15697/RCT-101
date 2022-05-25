import React from 'react'

const Timer = ({start,end}) => {
    const [time,setTime] = React.useState(start)

    React.useEffect(()=>{

            let id = setInterval(()=>{
               if(time==end){
                   clearInterval(id)
               
               }else{
                   setTime(()=>time+1)
               }
            },1000)
            return ()=>{
                clearInterval(id)
            }
              
    },[time])
  return (
    <div>
        <h2>Increment Timer</h2>
        <h3>{time}</h3>
    </div>
  )
}

export default Timer