import React from 'react'

const StopWatch = () => {
    const [watch,setWatch] = React.useState(0)
    const [timerId,setTimerId] = React.useState()

    const start =()=>{
        if(!timerId){
            var id = setInterval(()=>{
               setWatch((prev) => prev+1)
            },1000)
            setTimerId(id)
        }
    };
    const pause = (id) =>{
        clearInterval(timerId)
        setTimerId(null)
    }
    const reset = () =>{
        clearInterval(timerId);
        setWatch(0);
        setTimerId(null)
    }
  return (
    <div>
        <h3>StopWatch</h3>
        <h4>Watch : {watch}</h4>
        <div>
            <button onClick={start} >Start</button>
            <button onClick={pause} >Pause</button>
            <button onClick={reset} >Reset</button>
        </div>
    </div>
  )
}

export default StopWatch