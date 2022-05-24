import React, { useEffect } from 'react'

const Todo = () => {
    const [query,setQuery] = React.useState("")
    const [data, setData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)
    const [page,setPage] = React.useState(1)
  document.title=`Todo`

  React.useEffect(() => {
       getTodos(page)
},[page]);
  const getTodos = (page = 1) =>{
    setIsLoading(true)
    fetch(`https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=3`)
    .then((res) => res.json())
    .then((res) =>{
        console.log(res)
        setData(res)
    })
    .catch((err)=>{
        setIsError(true)
    })
    .finally(()=>{
        setIsLoading(false)
    })
  }
  const addTodos = (query) =>{
      const payLoad = {
          title:query,
          status:false
      }
    setIsLoading(true)
    return fetch('https://json-server-mocker-masai.herokuapp.com/tasks',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payLoad)
    })
    .then((res) => res.json())
    .then((res) =>{
        return getTodos()
    })
    .catch((err)=>{
        setIsError(true)
    })
    .finally(()=>{
        setIsLoading(false)
    })
  }


  return isLoading ? (
           <div><h3>...loading</h3></div>
    ): isError ? (
           <div><h3>Something went wrong</h3></div>
    ): (
    <div>
        <h1>Todo</h1>
        <input 
           type="text" 
           placeholder='Add somethinbg' 
           value={query}
           onChange={(e)=>setQuery(e.target.value)}
           />
        <button onClick={()=>addTodos(query)} >Add</button>

        <div>
            {data.map((elem) => (
                <div key={elem.id} >{`${elem.title}  status--${elem.status}`}</div>
            ))}
        </div>
        <h3>Page : {page}</h3>
        <button  onClick={() =>setPage(page+1)} >Next Page</button>
        <button disabled={page===1} onClick={() =>setPage(page-1)} >prev Page</button>
    </div>
  )
}

export default Todo