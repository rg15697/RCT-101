import React from 'react'

function TodoInput({addTodo}) {
    const [value, setValue] = React.useState("")
  return (
    <div>
      <input
           type="text"
           value={value}
           placeholder="enter new TodoItem"
           onChange={(e)=>setValue(e.target.value)}
      />
    <button
          disabled={!value}
          onClick={()=>{
                        addTodo(value)
                        setValue("")
                       }
                  }
    >
        Add
    </button>
    </div>
  )
}

export default TodoInput