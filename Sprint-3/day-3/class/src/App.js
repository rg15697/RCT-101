import './App.css';
import Navbar from './Component/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from "./Component/home";
import Feeds from "./Component/Feeds"
import Posts from "./Component/Posts"
import Login from "./Component/Login"
import RequireAuth from './Component/RequireAuth';

function App() {
  return (
    <div className="App" >
    <Navbar />
    <Routes >
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feeds" element={<RequireAuth>
            <Feeds />
        </RequireAuth>} />
        <Route path="/posts" element={<RequireAuth>
            <Posts />
        </RequireAuth>} />
    </Routes>
    </div>
  );
}

export default App;
