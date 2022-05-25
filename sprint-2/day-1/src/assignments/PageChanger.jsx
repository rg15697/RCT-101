import React from 'react'
import styles from "./design.module.css"


const PageChanger = ({page,handlePageIncrement,handlePageDecrement,data}) => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <button disabled={page===1} onClick={handlePageDecrement} >prev Page</button>
    <h3 className={styles.page} >Page : {page}</h3>
    <button disabled={data.length<4}  onClick={handlePageIncrement} >Next Page</button>
   
</div>
  )
}

export default PageChanger