import './App.css';
import Home from './pre/Components/Home';
import About from './pre/Components/About';
import Navbar from './pre/Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './pre/Components/Products';

function App() {
  return (
    <div className="App">
        <Navbar/>{" "}
         <Routes>
             <Route path={"/"} element={<Home />}></Route>
             <Route path={"/about"} element={<About />}></Route>
             <Route path={"/products:id"} element={<Products />}></Route>
         </Routes>
         <Home/> 
    </div>
  );
}

export default App;
