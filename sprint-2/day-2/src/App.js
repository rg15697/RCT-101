// import axios from "axios"
import './App.css';
import Timer from './component/Timer';
import StopWatch from "./component/StopWatch"
// import { useEffect,useState } from 'react';
import Todos from './component/Todos';


function App() {
    // const [todos,setTodos] = useState([]);
    // const [page,setPage] = useState(1)
    // const [totalCount,setTotalCount] = useState(0)
    // const [limit,setLimit] = useState(2)
    // useEffect(() => {
    //     const getTodos = async () =>{
    //         // let res = await fetch("https://http://localhost:8080/posts")
    //         // let data = await res.json()

    //         let res = await axios.get(`http://localhost:8080/posts?_page=${page}&_limit=${limit}`)
    //         // console.log(res.data)
    //         setTodos(res.data);
    //         setTotalCount(Number(res.headers["x-total-count"]))
    //         console.log(todos)
    //     }
    //     getTodos()
    // },[page,limit])
  return (
        <div className="App">
              <Todos />
             <Timer />
             <StopWatch />
        </div>
    // <div className="App">

    //   <h2>UseEffect 2</h2>

    // <div className="buttonCont">
    // <button disabled={page<=1}  onClick={()=>setPage(page-1)}>{"<"} </button>
    //   <select  onChange={(e)=>setLimit(e.target.value)} >
    //          <option value={2}>Default</option>
    //         <option value={3}>3</option>
    //         <option  value={4}>4</option>
    //         <option value={5}>5</option>
    //         <option value={6}>6</option>
    //     </select>
    //    <button disabled={totalCount<=page*limit} onClick={()=>setPage(page+1)} >{">"} </button>
    // </div>



    //    <div className="ListCont">
    //        {todos.map((elem)=>(
    //            <div key={elem.id} style={{border:"solid red 2px",marginBottom:"20px"}}>
    //                <h4>Name : {elem.name} </h4>
    //                <h4>E-mail : {elem.email}</h4>
    //                <h4>Address : {elem.address}</h4>
    //            </div>
    //        ))}
    //    </div>

    // </div>
  );
}

export default App;
