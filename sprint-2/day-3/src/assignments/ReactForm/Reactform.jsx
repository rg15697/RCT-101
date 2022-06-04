import React from 'react'
import axios from "axios"
import styles from "./ReactForm.module.css"
import Input from "./components/Input"
// import axios from "axios"
import Tabl from "./components/Table"
import PageChanger from "./components/PageChanger"

const Reactform = () => {
    // const [form,setForm] = React.useState({});
    const [todos,setTodos] = React.useState([])
    const [isLoading,setIsLoading] = React.useState(false);
    const [isError,setIsError] = React.useState(false);
    const [page,setPage] = React.useState(1);
    const [limit,setLimit] = React.useState(5)
  
    // const [totalCount,setTotalCount] = React.useState(0)

    React.useEffect((page,limit)=>{
  
        getData()
    },[page,limit])

    const getData = () =>{
        setIsLoading(true);
         axios.get(`http://localhost:8080/employeeDetails?_page=${page}&_limit=${limit}`)
        .then((res)=>{console.log('totalCOunt',Number(res.headers["x-total-count"]));
        setTodos(res.data);
    //     setTotalCount(Number(res.headers["x-total-count"]))
       })
        .catch((err)=>{
            setIsError(true)
        })
        .finally(()=>{
            setIsLoading(false)
        })
        console.log('todos' ,todos)
        
    }

    const sortingData=(sorting)=>{
 
    let newtodo= todos.sort((a,b)=>{
          if(sorting=="h2l") return (b.salary-a.salary)
          if(sorting=="l2h")  return (a.salary-b.salary) 
      })
      setTodos(newtodo)
    //   getData(todos)
    }

    const handlefilter = (e)=>{
       let newtodo= todos.filter((elem)=>{
           return elem.department==e.target.value
        })
        setTodos(newtodo);
        // getData(todos)
    }

    const onDelete = (id)=>{
        console.log("delete",id)
        let newtodo = todos.filter((elem)=>elem.id!=id)
        console.log(newtodo)
         setTodos("newtodod " ,newtodo);
        //  getData(todos)
    }

  return isLoading ? (
      <h3>... is Loading</h3>
  ) : isError ? (
    <h3>Something went wrong</h3>
  ) : (
    <div className={styles.Container}>
    <h2>React Form</h2>
    <input type="number" placeholder='set Page limit' onChange={(e) => setLimit(e.target.value)} />
    <div className={styles.formContainer}>
       <Input inVokeData={getData} loadingPage={()=>setIsLoading(true)} />
    </div>
    <select 
       onChange={(e)=>sortingData(e.target.value)}
       name="sorting"
       >
           {}<option value="default" >Default</option>
           <option value="h2l">High to low</option>
           <option value="l2h">Low to High</option>
       </select>


       <select
                     name='department'
                     className={styles.selection}
                     onChange={handlefilter}
                  >
                         <option value="">Select your Department</option>
                         <option value="Management">Management</option>
                         <option value="Marketing">Marketing</option>
                         <option value="Accounting">Accounting</option>
                         <option value="Purchasing">Purchasing</option>
                         <option value="Personal">Personal</option>
         </select>

       

    <div className={styles.table} >
        <Tabl todos={todos}  handleDelete={onDelete} />
    </div>



    <PageChanger
         limit={limit}
         page={page}
         data={todos}
         handlePageIncrement={()=>setPage(page+1)}
         handlePageDecrement={()=>setPage(page-1)}
       />
</div>
  )
}

export default Reactform