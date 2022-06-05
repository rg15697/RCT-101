import React from "react";

export const Pagination=({handlePage,page})=>{

  return (
     <div>
      <button 
        onClick={()=>handlePage(-1)}
        disabled={page===1} >Prev</button>

      <button 
        onClick={()=>handlePage(+1)}
         >Next</button>
     </div>
  )
}