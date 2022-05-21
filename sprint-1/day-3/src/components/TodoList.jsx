import React from 'react'
import TodoItem from "./TodoItem"

function TodoList({ todolist,deleteTodo}) {
  return (
    <div>
        <h3>Todo list</h3>
        <ul>
            {todolist.map((elem)=>(
                <TodoItem key={elem.id} iid={elem.id} value={elem.value} delTodofn={deleteTodo} />
            ))}
        </ul>
    </div>
  )
}

export default TodoList