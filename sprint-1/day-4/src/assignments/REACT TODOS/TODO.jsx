import React from 'react'
import TodoInput from './TodoInput';
import styles from "./Todo.module.css";
import TodoItem from "./TodoItem"

const TODO = () => {
    const [query,setQuery] = React.useState("");
    const [todo,setTodo] = React.useState([]);

    const handleAdd = () =>{
        let payLoad ={
            id:Date.now(),
            value:{query},
            status:false
        }
        let newTask=([...todo,payLoad]);
        setTodo(newTask)
        setQuery("")
        console.log("Todo", todo)
    }

  return (
    <div className={styles.MainCont}>
        <TodoInput 
             handleChange={(e)=>setQuery(e.target.value)} 
             value={query} handleAdd={handleAdd } 
        />
        <div className={styles.TodoItems}>
          {todo.map((elem)=> {
            //   console.log(elem)
              return (
                <TodoItem props ={elem} />
              )
          })}
        </div>
    </div>
  )
}

export default TODO