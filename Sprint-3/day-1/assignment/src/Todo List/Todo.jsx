import React from 'react'
import Task from './Task'
import styles from "./Todo.module.css"
import { Button} from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


const Todo = () => {
    
    const [todos,setTodos] = React.useState([])
   
    const [isCompleted,setIsCompleted] = React.useState(false)

    const handleDelete=(id)=>{
        let newTodo = todos.filter((elem)=> elem.id!==id)
        setTodos(newTodo)
    }

  return (
    <div>
        <h1>Todo</h1>
        <div className={styles.TodoMainCont}>
            <Task 
            handleAdd={(query)=>setTodos([...todos,{id:Date.now(),task:{query},isCompleted:false}])}
            />
            <ul >
                {todos.map((elem)=>(
                    <li key={elem.id} className={styles.TaskCont} >
                     <Checkbox
                       checked={elem.isCompleted}
                       onChange={(e)=>setIsCompleted(e.target.checked)}
                       ></Checkbox>

                     <Text  style={{color: isCompleted ? "green" :"red"}} fontSize='xl'>{elem.task.query}</Text>
                     <Button 
                     
                       colorScheme='teal' 
                       variant='outline'
                       onClick={()=>handleDelete(elem.id)}
                     >Remove Todo</Button></li>
                ))}
            </ul>
        </div>

    </div>
  )
}

export default Todo