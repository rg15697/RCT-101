import React from 'react'

const Counter = (props) => {
    const [count,setCount] = React.useState(props.init)
    const [clickedCount,setClickedCount] = React.useState(props.init)

    
    React.useEffect(()=>{
        console.log("inside useEffect");
        document.title=`you have clicked ${clickedCount} times`
    //     // it upadates the componenet during mounting,unmounting and updating
    });


    // React.useEffect(()=>{
    //     console.log("inside useEffect");
    // document.title=`you have clicked ${clickedCount} times`
    //  it is called once only, during mounting,
    // //  no dependency
    // },[]);


    // React.useEffect(()=>{
    //     document.title=`you have clicked ${clickedCount} times`
    // // mounting updates
    // },[clickedCount])
    const A = ()=><div> Component :A</div>
    const B = ()=><div> Component :B</div>
  return (
    <div>
        <h3> Count: {count}</h3>
        <button onClick={()=>{
            setCount(count+1);
            setClickedCount(clickedCount+1)
            setShowComponent(!showComponent)
        }} > + </button>
        <button onClick={()=>{
                        setCount(count-1);
                        setClickedCount(clickedCount+1)
        }} > - </button>
        {showComponent? <A />:< B/>}
    </div>
  )
}

export default Counter