import React from 'react'

const ExampleUseref = () => {
    const [time,setTime] = React.useState(0);
    const timerRef = React.useRef();
    const [isRunning,setIsRunning] = React.useState(false)

    React.useEffect(() => {
        startTimer();

        return stopTimer()
    },[])

    const startTimer = () =>{
       if(isRunning){
           return;
       }
       timerRef.current = setInterval(()=>{
        setTime((prev) => prev+1)
    },1000)
        setIsRunning(true)
    }

    const stopTimer = () =>{
        clearInterval(timerRef.current)
        setIsRunning(false)
    }
  return (
    <div>
        <h2>ExampleUseref</h2>
        <h3>{time}</h3>
        <div>
            <button onClick={startTimer}> Start </button>
            <button onClick={stopTimer}> Stop </button>
        </div>
    </div>
  )
}

export default ExampleUseref