import React from 'react';
import  axios  from 'axios';
import { FormPrep } from './FormPrep';
import { Pagination } from './Pagination';


export const GetData = ()=>{

  const [data,setData] = React.useState([])
  const [isError,setIsError] = React.useState(false)
  const [isLoading,setIsLoading] = React.useState(true)
  const [limit,setLimit] = React.useState(3)
  const [page,setPage] = React.useState(1)
  
  
  React.useEffect(()=>{
    getData(page,limit)
  },[page,limit])

  const getData=(page=1)=>{
      setIsLoading(true)
     axios.get(`http://localhost:8080/data?_page=${page}&_limit=${limit}`)
    .then((res)=>setData([res.data]))
    .catch((err)=>setIsError(true))
    .then(()=>setIsLoading(false))
    console.log(data)
  }
  
  return isLoading ? (
      <h3>...is Loading</h3>
  ) : isError ? (
      <h3>something went wrong</h3>
  ) : (
    <div>
      <h1>Practice</h1>
        <FormPrep />
        {data.map((elem)=>(
            <div key={elem.id}>{`Intro : My name is ${elem.name}.I am a {elem.gender} I am from ${elem.city} `}</div>
        ))}
        <Pagination page={page} handlePage={(value)=>setPage(page+value)} />
    </div>
  )
}