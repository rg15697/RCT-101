import React from 'react'
import {
    BodyWrapper,
    MainHead,
    CounterDiv,
    ButtonWrapperDiv,
    Button
} from "./Counter.styled"

 

const Counter = () => {

    const [count,setCount] = React.useState(0)
  return (
    <BodyWrapper>
       <MainHead>Counter</MainHead>
       <CounterDiv>Count: {count}</CounterDiv>
       <ButtonWrapperDiv flexDirection="row">
          <Button onClick={()=>setCount(count-1)}>Decrement</Button>
          <Button onClick={()=>setCount(count+1)}>Increment</Button>
       </ButtonWrapperDiv>
    </BodyWrapper>
  )
}

export default Counter