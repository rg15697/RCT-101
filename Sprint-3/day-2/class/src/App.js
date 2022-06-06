import './App.css';
import Home from"./class/components/Home"
import Navbar from './class/components/Navbar';
import About from "./class/components/About"
import { Routes,Route } from 'react-router-dom';
import Products from "./class/components/Products"
import Product from './class/components/Product';
function App() {

  return (
    <div className="App">
        <Navbar />
         <Routes>
           <Route path="" element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path ="/products/*" element={<Products />} >
              <Route path =":id" element={<Product />} />
           </Route>
          
         </Routes>
    </div>
  );
}

export default App;
