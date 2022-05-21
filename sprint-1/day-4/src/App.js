import './App.css';
// ========================= pre====================================

import ChildToParent from './pre/ChildToParent';
import ParentToChild from './pre/ParentToChild';
import Sibling from './pre/Sibling';

//=========================class==================================

import Parent from './Class/Parent';

function App() {
  return (
    <div className="App">

{/*  ========================= pre==================================== */}

      <h1>State upLifting</h1>
       <div style={{display:'flex',gap:"20px",justifyContent:"center", border:"solid red 2px", padding:"10px"}} >
          <ParentToChild />
          <ChildToParent />
          <Sibling />
        </div>
        
{/* =========================class==================================           */}
        
        <Parent />
    </div>
  );
}

export default App;
