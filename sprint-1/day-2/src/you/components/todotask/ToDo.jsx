import React from 'react'
import ToDoItem from "./ToDoItem"


function ToDo() {
    const [query,setQuery] = React.useState("")
    const [toDos,setToDos] = React.useState([]);
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const onDelete = (id)=> {
        let newtodos = toDos.filter((elem)=> elem.id!=id);
        console.log(newtodos)
        setToDos(newtodos)
    }
  return (
    <div>
        <h1>ToDo</h1>
        <input
         type="text"
         onChange={handleChange}
         value={query}

        //  on press enter capture the query

         onKeyDownCapture={(e) => {
          if(e.key=='Enter') {
            setToDos([...toDos,{id:Date.now(), value:query,isCompleted:false }])
            setQuery("")
          }            
         }}

         
          />
        <button onClick={() => {
            setToDos([...toDos,{id:Date.now(), value:query,isCompleted:false }])
            setQuery("")
        }} >Add</button>
 
    <div>
        {toDos.map((elem) => (
           <ToDoItem key={elem.id} props={elem} handleDelete={onDelete} />
        ))}
    </div>
       
    </div>
  )
}
export default ToDo



// read input
// update todo list
// re render todo list when updated