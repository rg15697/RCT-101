import React from 'react'
import TodoItem from "./TodoItem"
import styles from "./todo.module.css"
function TodoList({propFromToDo}) {
  return (
    <div className={styles.mainCont} >
{        propFromToDo.map((elem)=>(
            <TodoItem key={elem.id} props={elem }/>
        ))}
    </div>
  )
}

export default TodoList