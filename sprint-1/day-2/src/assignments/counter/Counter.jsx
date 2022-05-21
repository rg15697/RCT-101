import React from "react";
import styles from "./counter.module.css"
import "./counter.css"

export const Counter = ({initValue}) => {
    const [count,setCount] = React.useState(initValue);
    const handleValue = (value) => {
        setCount(count+value)
    }

    return (
        <div>
            <h1 style={{color:"Teal"}}>Counter</h1>
            <div className="Counter" >
                <div className="count"><h3 style={{ color:count%2==0 ? "green" : "red"}}>Count : {count}</h3></div>
                <div className={styles.handleValueDiv} >
                   <button className="button" onClick={()=>handleValue(+1)}>Increment</button>
                   <button className="button" onClick={()=>handleValue(-1)}>Decrement</button>
                   <button className="button" onClick={() => setCount(count*2)} >Double</button>
                </div>
            </div>

        </div>
    )
}