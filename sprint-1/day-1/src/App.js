import {Main} from "./you/Main"
import './App.css';
import { Hello } from "./we/Head";
import { Answer1 } from "./we/Answer";
import { Answer2 } from "./we/Answer";
import StaticCard from "./assignments/REACT MOBILE OS/StaticCard";
import Navbar from "./assignments/Navbar/Navbar";

function App() {

     // let nam = 'Aaro'
    // passing variable
    let info = [
        {name:"Roh",place:'Azamgarh',infoX:{
            a:1,
            b:2
        }},
        {name:"Rohi",place:'Azamgarh',infoX:{
            a:3,
            b:4
        }},
        {name:"Rohit",place:'Azamgarh',infoX:{
            a:5,
            b:6
        }},
        {name:"RohitGupta",place:'Azamgarh',infoX:{
            a:7,
            b:8
        }}
    ]
  return (
    <div className="App">
        {/* <Hello />
        <Answer1 name="Aaro" place="Azamgarh" />
        <Answer1 name="Rohit" place="Azamgarh" />
        <Answer1 name="Shivam" place="Azamgarh" />

        <Hello />

        <Answer1 {...info[0]} />
        <Answer1 {...info[1]} />
        <Answer1 {...info[2]} />
        <Answer1 {...info[3]} />

        <Hello />


        {info.map((user) => (
            <div>
                <Answer2 {...user} />
            </div>
        ))}


    
      <Main /> 
       <StaticCard />  */}
       <Navbar />
    </div>
  );
}

export default App;
