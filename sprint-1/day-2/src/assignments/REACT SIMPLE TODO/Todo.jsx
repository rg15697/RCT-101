import React from 'react'
import TodoList from "./TodoList"
import styles from "./todo.module.css"

function Todo() {
    const [query,setQuery] = React.useState("");
    const [todoList,setTodoList] = React.useState([])
    
  return (
    <div className={styles.Cont}>
        <div className={styles.padd} >
        <h1>REACT SIMPLE TODO</h1>
        <div>
            <input
             type="text"
             value={query}
             onChange={(e)=>setQuery(e.target.value)}
             placeholder="Write Something"
             />
             <button onClick={() => {
                 setTodoList([...todoList,{id:Date.now(), value:query, isChecked:false}]);
                 setQuery("")
                }} >+</button>
                <div>
                  <TodoList propFromToDo={todoList} />
                </div>
        </div>
        </div>
    </div>
  )
}

export default Todo