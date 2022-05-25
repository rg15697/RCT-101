import './App.css';

// =====================PreClass====================

import Main from './pre/Main';
import Conc2 from './pre/conc2';
import Example from './pre/Example';
import Todo from './pre/Todo';

// =====================Class====================



//==========================Assignment============

import BasedOnJsonServer from "./assignments/BasedOnJsonServer"

function App() {
  return (
    <div className="App">

        {/* =====================PreClass==================== */}
          {/* <Main init={0} /> */}
          {/* <Conc2 /> */}
          {/* <Example /> */}
          {/* <Todo /> */}
        {/* =====================Class==================== */}    


        <BasedOnJsonServer />     
        
    </div>
  );
}

export default App;
