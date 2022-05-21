import React from 'react'

function TodoItem({iid,value,delTodofn}) {
  return (
    <li>
       {value}
       <button
        onClick={()=>delTodofn(iid)}
       >Delete</button>
    </li>
  )
}

export default TodoItem