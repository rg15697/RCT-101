import './App.css';


// ==========================prevideo==================
import ExampleUseref from "./pre/ExampleUseref"
import Counter from './pre/Counter';
import InputForm from './pre/InputForm';
import Conditionalrendering from './pre/Conditionalrendering';
import RefExample from "./pre/RefExample"

//  ======================Class===============================
import StopWatch from './Class/StopWatch';
import Form from "./Class/COmponents/Form"

//==========================assigments=======================

import ReactForm from "./assignments/ReactForm/Reactform"


function App() {
  return (
    <div className="App">
    <h1 style={{color:"red"}}>Events, Forms, useRef and Input handling</h1>
    {/* ======================pre========================= */}
                          {/* <Counter />
                          <br/>
                          <InputForm />
                          <Conditionalrendering />
                          <ExampleUseref />
                          <RefExample /> */}
      {/* ================================class======================== */}
                      {/* <StopWatch /> */}

                             {/* <Form /> */}

        {/* ============================assignments============================*/}
                           <ReactForm />
    </div>
  );
}

export default App;
