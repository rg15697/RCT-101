import React from 'react'
import styles from "./design.module.css"
const Item = ({elem}) => {
  return (
    <div className={styles.ContentCont}>
                     <h4>Name : {elem.name}</h4>
                     <h4>E-mail : {elem.email}</h4>
                     <h4>Address : {elem.adderss}</h4>
    </div>
  )
}

export default Item