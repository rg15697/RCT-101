import React from 'react'
import styles from "./Todo.module.css"

const TodoInput = ({value,handleChange,handleAdd}) => {
  return (
    <div>
        <div className={styles.TodoInputCont} >
            <div>
                <button 
                disabled={!value}
                className={styles.addButton} 
                onClick={handleAdd}> + 
                </button>  
                    <input 
                      className={styles.formInput}
                      type="text"
                      onChange={handleChange}
                      placeholder="Add a to-do..."
                    />
               
            </div>
        </div>


    </div>
  )
}

export default TodoInput