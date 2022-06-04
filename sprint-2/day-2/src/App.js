// import axios from "axios"
import './App.css';
// import Timer from './component/Timer';
import StopWatch from "./component/StopWatch"
import Todos from './component/Todos';

import Timer from "./Assignment/Timer"


function App() {

  return (
        <div className="App">
              {/* <Todos />
              <Timer /> */}
              <StopWatch />

              {/* =====================Assignment=================== */}

              {/* <Timer start={0} end={15} /> */}
        </div>
  );
}

export default App;
