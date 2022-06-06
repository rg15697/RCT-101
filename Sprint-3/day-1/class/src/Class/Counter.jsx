import React from 'react'

const reducer = (state,action) => {


    switch (action.type){
        case 'INCREMENT': {
           
            return state + action.payload;
        }
        case "DECREMENT" : {
            return state - action.payload;
        }
        default : {
            return state
        }
    }
}

const Counter = () => {
    const [counter,dispatch] = React.useReducer(reducer,50);

  return (
    <div>
        <h3>counter : {counter}</h3>

        <button onClick={()=>dispatch({type:"INCREMENT",payload:150})} >+</button>
        <button onClick={()=>dispatch({type:"DECREMENT",payload:100})} >-</button>
      
    </div>
  )
}

export default Counter