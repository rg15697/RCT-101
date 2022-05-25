import React from 'react'
import DetailsList from "./DetailsList"
import PageChanger from "./PageChanger"
import styles from "./design.module.css"
// import Item from './Item';


const BasedOnJsonServer = () => {

    const [data,setData] = React.useState([]);
    const [name,setName] = React.useState("");
    const [address,setAddress] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [isLoading,setIsLoading] = React.useState(true);
    const [isError,setIsError] = React.useState(false);
    const [page,setPage] = React.useState(1)

    document.title=`Json-server`
// console.log(data)
    React.useEffect(() => {
        getTodos(page)
 },[page]);
   
    const getTodos = (page=1)=> {
      
       setIsLoading(true)
      
       fetch(`http://localhost:8080/posts?_page=${page}&_limit=4`)
       .then((res) => res.json())
       .then((res) =>{
    //    let newData = [...data,res]
       setData(res)
       console.log (data)
  
       })
       .catch((err) =>{
          setIsError(true)
       })
       .finally(()=>{
           setIsLoading(false)
       })
    }
    // console.log(email,address)
    const AddTodo = (name,email,address)=>{
   
       let payLoad = {
        id: Date.now(),
        name,
        email,
        adderss: address,
        status:false
       }
        setIsLoading(true)
         return fetch('http://localhost:8080/posts',{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(payLoad)  
         })
         .then((res) => res.json())
         .then((res)=>{
             console.log(res)
          setName("")
          setAddress("");
          setEmail("")
          return getTodos();
         })
    }
  return isLoading ? (
      <h2>...isLoading</h2>
  ) : isError ? (
      <h2>Something went wrong</h2>
  ) : (
        <div className={styles.mainCont} >
          <div>
              <h3>Basic details</h3>
              <form>
            <input
               className={styles.detailsInput} 
               type="text" 
               value={name}
               onChange={(e)=>setName(e.target.value)}
               placeholder="Add Name"
            />
            <input 
               className={styles.detailsInput} 
               type="text" 
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               placeholder="Add Email"
            />
            <input 
               className={styles.detailsInput} 
               type="text" 
               value={address}
               onChange={(e)=>setAddress(e.target.value)}
               placeholder="Add Address"
            />
            <button disabled={name=="" || email=="" || address == ""} onClick={()=>AddTodo(name,email,address)} >Add </button>
              </form>
          </div>
           <DetailsList data={data} />
           <PageChanger
             page={page}
             data={data}
             handlePageIncrement={()=>setPage(page+1)}
             handlePageDecrement={()=>setPage(page-1)}
           />
        </div>
  )
}

export default BasedOnJsonServer