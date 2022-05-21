import React from 'react'
import styles from "./todo.module.css"
function TodoItem({props}) {
    const [isChecked,setIsChecked] = React.useState(props.isChecked)
  return (
    <>
       <div key={props.id} className={styles.ElemCont}>
           <span>{props.value}</span>
           <input
           type="radio"
           onChange={(e) =>setIsChecked(e.target.checked)}
           checked={isChecked}
           />
       </div>
    </>
  )
}

export default TodoItem