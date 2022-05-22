
import {useState} from "react"
import './App.css';
import TodoApp from "./components/TodoApp"
import Counter from "./components/Counter"
import PaymentCard from "./assignments/React - Payment card/components/PaymentCard";
function App() {


    // ============================class=====================


    // const [toggle, setToggle] = useState(false);
    //        return (
    //          <div className="App">
    //          <button onClick={()=>setToggle(!toggle)} >
    //              {toggle ? 'Show TodoApp' : 'show Counter'}
    //         </button>
    //          {toggle ? <Counter /> : <TodoApp /> }
    //     </div>
    //    )


    //    =====================Assignment=======================

    return (
        <div>
            <PaymentCard  />
        </div>
    )


}

export default App
