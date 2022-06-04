import React from 'react'



const PageChanger = ({page,handlePageIncrement,handlePageDecrement,data,limit}) => {

    console.log('pageChanger', data)
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <button disabled={page===1} onClick={handlePageDecrement} >prev Page</button>
    <h3 >Page : {page}</h3>
    <button disabled={data.length<limit}  onClick={handlePageIncrement} >Next Page</button>
   
</div>
  )
}

export default PageChanger