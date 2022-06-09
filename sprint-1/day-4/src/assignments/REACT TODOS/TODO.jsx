import React from 'react'
import TodoInput from './TodoInput';
import styles from "./Todo.module.css";
import TodoItem from "./TodoItem"

const TODO = () => {
    const [query,setQuery] = React.useState("");
    const [todo,setTodo] = React.useState([]);
    const [isCompleted,setIsCompleted] = React.useState(false)

    const handleAdd = () =>{
        let payLoad ={
            id:Date.now(),
            value:query,
            isCompleted:false
        }
        let newTask=([...todo,payLoad]);
        setTodo(newTask)
        setQuery("")
        console.log("Todo", todo)
    }

  return (
<div className={styles.MainCont}>
    <div className={styles.Cont}>
        <TodoInput
             handleChange={(e)=>{
                setQuery(e.target.value)
                 console.log(query)
             }} 
             value={query} handleAdd={handleAdd } 
        />
        <div className={styles.TodoItems}>
          {todo.map((elem)=> {
              return (
                <TodoItem key={elem.id} props = {elem} isCompleted={isCompleted} 
                handleStatus={(e)=>setIsCompleted(e.target.checked)} />
              )
          })}
        </div>
    </div>
</div>
  )
}

export default TODO