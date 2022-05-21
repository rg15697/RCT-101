import React from 'react'
import styles from "./ReactPayment.module.css"

const Header = (dated.date) => {
  return (
    <div>
        <div className={styles.headerCont} >
            <div className={styles.date} >
               <h2>{dated.date}</h2>
                <p>Case Study</p>
            </div>
            <div>
                <img  src="https://www.askgalore.com/wp-content/uploads/2020/08/amazon-icon-amazon-logo-png-icon.png" alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default Header