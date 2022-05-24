import './App.css';

// =====================PreClass====================

import Main from './pre/Main';
import Conc2 from './pre/conc2';
import Example from './pre/Example';
import Todo from './pre/Todo';

// =====================Class====================


function App() {
  return (
    <div className="App">

        {/* =====================PreClass==================== */}
          {/* <Main init={0} /> */}
          {/* <Conc2 /> */}
          {/* <Example /> */}
          <Todo />
        {/* =====================Class==================== */}         
        
    </div>
  );
}

export default App;
