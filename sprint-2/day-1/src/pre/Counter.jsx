import React from 'react'

const Counter = (props) => {
    const [count,setCount] = React.useState(props.init)
    const [clickedCount,setClickedCount] = React.useState(props.init)


    
    React.useEffect(()=>{
        console.log("no dependencies");
    
    //     // it upadates the componenet during mounting,unmounting and updating
    });


    React.useEffect(()=>{
    document.title=`you have clicked ${clickedCount} times`
    console.log("[] dependencies");
    //  it is called once only, during mounting,
    //  no dependency
    },[]);


    React.useEffect(()=>{
        document.title=`you have clicked ${clickedCount} times`
        console.log("dependencies");
    // mounting updates
    },[clickedCount])

  return (
    <div>
        <h3> Count: {count}</h3>
        <button onClick={()=>{
            setCount(count+1);
            setClickedCount(clickedCount+1)
        
        }} > + </button>
        <button onClick={()=>{
                        setCount(count-1);
                        setClickedCount(clickedCount+1)
        }} > - </button>
       
    </div>
  )
}

export default Counter