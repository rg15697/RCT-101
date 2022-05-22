import React from 'react'

const TodoInput = ({query,handleChange,handleAdd}) => {
  return (
    <div>
        <div className={styles.TodoInputCont} >
            <div>
                <button 
                className={styles.addButton} 
                onClick={handleAdd}> + 
                </button>  
                    <input 
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Add a to-do..."
                    />
               
            </div>
            <div>
            <a target="_blank" href="https://icons8.com/icon/19295/star">Star</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </div>
        </div>
    </div>
  )
}

export default TodoInput