import React from 'react'
import styles from "./Todo.module.css"

const TodoInput = ({value,handleChange,handleAdd}) => {
  return (
    <div>
        <div className={styles.TodoInputCont} >
            <div>
                <button 
                className={styles.addButton} 
                onClick={handleAdd}> + 
                </button>  
                    <input 
                    disabled={!value}
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Add a to-do..."
                    />
               
            </div>
        </div>


    </div>
  )
}

export default TodoInput