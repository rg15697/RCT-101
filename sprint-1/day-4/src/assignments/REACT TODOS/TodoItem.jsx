import React from 'react'

const TodoItem = ({props}) => {
    const [isCompleted,setIsCompleted] = React.useState(props.isCompleted)
  return (
      <div key={key}>
            <div>
                <input 
                type="checkbox"  
                checked={props.isCompleted}
                onChange={(e)=>setIsCompleted(e.target.checked)}
                />
                <p>{props.value}</p>
            </div>
             <div>
                  <i class="fa-regular fa-star"></i>
            </div>

       </div>
       
   
  )
}

export default TodoItem