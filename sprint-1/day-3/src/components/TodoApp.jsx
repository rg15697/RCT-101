import React from 'react'
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import {v4 as uuidv4} from "uuid"

function TodoApp() {
    const [todos,setTodos] = React.useState([])

    const addTodofn = (newTodo)=>{
        setTodos([...todos,
                  { id:uuidv4(),
                    value:newTodo,
                    status:false
                  }
            ])
            
    }
    const deleteTodofn = (id) => {
        setTodos(todos.filter((todo)=>todo.id != id))
        console.log(todos)
    }
  return (
    <div>
        <h1>TodoApp</h1>
        <TodoInput addTodo={addTodofn} />
        <TodoList todolist={todos} deleteTodo={deleteTodofn}/>
    </div>
  )
}

export default TodoApp