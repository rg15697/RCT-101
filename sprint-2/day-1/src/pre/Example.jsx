import React from 'react'

const Example = () => {
    const [count,setCount] = React.useState(0);
    React.useEffect(() => {
        console.log("called useEffect at", Date.now())
        return () => {
            console.log("called cleanup at ", Date.now())
        };
    }, [count])

  return (
    <div>
        <h1>Example</h1>
        <h3>Count : {count}</h3>
        <button onClick={() => setCount (count + 1)} >
            Increment
        </button>
    </div>
  )
}

export default Example