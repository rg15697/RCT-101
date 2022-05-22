import React from 'react'
import TodoInput from './TodoInput';
import Todo from "./TODO"

const TODO = () => {
    const [query,setQuery] = React.useState("");
    const [todo,setTodo] = React.useState([])
  return (
    <div className={styles.MainCont}>
        <TodoInput handleChange={()=>setQuery(e.target.value)} query={query} handleAdd={()=>{
            setTodo([...todo,{
                id:Date.now(),
                value:{query},
                status:false
            }])
        }} />
        <div className={styles.TodoItems}>
          {todo.map((elem)=> (
              <Todo />
          ))}
        </div>
    </div>
  )
}

export default TODO