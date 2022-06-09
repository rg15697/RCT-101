import React from 'react'

const TodoItem = ({props,handleStatus,isCompleted}) => {

  return (
      <div>
                <input 
                type="checkbox"  
                checked={isCompleted}
                onChange={handleStatus}
                />
                <p>{props.value}</p>
           
             
                  <i class="fa-regular fa-star"></i>
           

       </div>
       
   
  )
}

export default TodoItem