import React from 'react'
import styles from "./ReactPayment.module.css"

const PaymentCardInner = ({date,logo,pay,gift,Type,color,key}) => {
  return (
    <div key={key} style={{backgroundColor:color,marginBottom:"30px"}}>
       <div className={styles.Cont}>
            <div className={styles.upperDiv}>
                <div className={styles.leftUpperDiv}>
                    <div className={styles.date}>{date}</div>
                    <div className={styles.caseStudy}>Case Study</div>
                </div>
                <div className={styles.logoDiv}>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div>
                <h1>{gift}</h1>
                <h1>{pay}</h1>
            </div>
            <div className={styles.lowerDiv}>
                 <div>
                     <h3>{Type}</h3>
                 </div>
                 <div style={{fontSize:"30px",marginRight:"20px"}} className="fa-solid fa-arrow-right-long"> </div>
            </div>
       </div>
    </div>
  )
}

export default PaymentCardInner