import React from 'react'
import styles from "./design.module.css"
import Item from './Item';

const DetailsList = ({data}) => {
  return (
    <div className={styles.MainContCont}>
    {data.map((elem) => 
        
        <Item key={elem.id} elem={elem} />
    )}
</div>
  )
}

export default DetailsList