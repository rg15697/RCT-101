import React from 'react'
import styles from "./todo.module.css"

function ToDoItem({props,handleDelete}) {
    const [isCompleted,setIsCompleted] = React.useState(props.isCompleted)
  return (
    <div key={props.id} className={styles.todoitem}>
        <input type="checkbox" checked={isCompleted} onChange={(e)=>setIsCompleted(e.target.checked)} />
        <div className={isCompleted ? styles.variation : ""} >{props.value}</div>
        <button onClick={()=>handleDelete(props.id)} > Delete</button>
    </div>
  )
}

export default ToDoItem