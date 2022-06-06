import React from "react"
import { Input } from '@chakra-ui/react'
import styles from "./Todo.module.css"
import { Button} from '@chakra-ui/react'

const Task = ({handleAdd}) => {
    const [query,setQuery] = React.useState("");
  
  return (
    <div className={styles.container}>  
        <Input 
        type="text"
        variant='outline' 
        placeholder='Add Todo' 
        onChange={(e)=>setQuery(e.target.value)}
       
        />
        <Button 
           colorScheme='teal'
           variant='outline'
           onClick={()=>handleAdd(query)}
         >Add</Button>
    

    </div>
  )
}

export default Task