import React from 'react'
import styles from "./Todo.module.css"

const TodoItem = ({props}) => {
    const [isCompleted,setIsCompleted] = React.useState(false)

  return (
      <div className={styles.TodoItem}>
                 <div style={{marginTop:"20px",height:"20px"}}> <input 
                       type="checkbox"  
                       checked={isCompleted}
                       onChange={()=>setIsCompleted(!isCompleted)}
                 /></div>
                <div><p className={isCompleted ? styles.completed : styles.inComplete}>{props.value}</p></div>
                  <div style={{marginTop:"20px"}}><i class="fa-regular fa-star"></i></div>
       </div>
       
  )
}

export default TodoItem