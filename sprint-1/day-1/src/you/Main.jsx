import React from "react" ;
import {Element} from "./components/Element"
import {Heading} from "./components/Heading"

export const Main = ()=>{
   let info = [
       {name:"Aaro",place:"Azamgarh",School:"MDJV"},
       {name:"Rohit",place:"Martinganj",School:"SSS"},
       {name:"Anjali",place:"Jhansi",School:"KKRV"},
       
   ]
    return (
        <div style={{textAlignment:"center"}} >
            <Heading key="Heading1" />
            <Element name="Shubham" place="ABC" School="MASD" />
            <Heading key="Second" />

            {info.map((user)=>(
                <Element {...user} />
            ))}
        </div>
    )
}