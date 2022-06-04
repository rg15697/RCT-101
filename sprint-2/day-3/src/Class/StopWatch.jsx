import React from 'react'

const StopWatch = () => {
    const [watch,setWatch] = React.useState(0)
    // const [timerId,setTimerId] = React.useState()
   
    const timerId = React.useRef(null)
    // at re-render not change value of timerId
    // value of timerId will be persisted

    // timerId={current: null}

    const start =()=>{
        if(!timerId.current){
            var id = setInterval(()=>{
               setWatch((prev) => prev+1)
            },1000)
            timerId.current=id
        }
    };
    const pause = (id) =>{
        clearInterval(timerId.current)
        timerId.current=null
    }
    const reset = () =>{
        clearInterval(timerId.current);
        setWatch(0);
        timerId.current=null
    }

    React.useEffect(()=>{
        return reset;
    },[])
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