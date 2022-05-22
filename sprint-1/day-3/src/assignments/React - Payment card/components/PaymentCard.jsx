import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Midcont from './components/Midcont';
import styles from "./components/ReactPayment.module.css"

const PaymentCard = () => {
  let obj = {
      date:28/10/22
  }
  return (
    <>
     <div className={styles.mainCOnt} >
          <Header dated={obj} />
          <Midcont />
          <Footer />
     </div>
    </>
  )
}

export default PaymentCard

