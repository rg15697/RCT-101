import './App.css';

import { Task } from './you/components/todotask/Task';
import Counter from './you/components/counter/Counter';
import ToDo from './you/components/todotask/ToDo';



// import Todo from './assignments/REACT SIMPLE TODO/Todo';

// import {Counter} from './assignments/counter/Counter';

function App() {
  return (
    <div className="App">
        {/* <Counter initValue={1000} /> */}
        {/* <Task /> */}
        <ToDo /> 
          {/* ============================Assignments======================== */}
        {/* <Counter initValue={5} /> */}
        {/* <Todo /> */}

        
    </div>
  );
}

export default App;
