import React from 'react';
import PaymentCardInner from "./PaymentCardInner"
import styles from "./ReactPayment.module.css"

const PaymentCard = () => {
  let data= [
    {
        id:1,
       date:"28/10/22",
       logo:"https://merivis.org/wp-content/uploads/2018/02/Amazon-Logo-Transparent-PNG.png",
       gift:"Amazon Gift",
       pay:"Pay",
       Type:"Desktop - Mobile",
       color:"#ffa500"

    },
    {
        id:2,
       date:"28/10/22",
       logo:"https://merivis.org/wp-content/uploads/2018/02/Amazon-Logo-Transparent-PNG.png",
       gift:"Amazon Gift",
       pay:"Pay",
       Type:"Desktop - Mobile",
       color:"#ffa500"

    },
    {
        id:3,
         date:"17 Sep 2020",
         logo:"https://pixlok.com/wp-content/uploads/2021/04/Apple-Logo-PNG-768x768.jpg",
         gift:"Apple Gift",
         pay:"Payment",
         Type:"MacOS - Mobile",
         color:"#f5f5f5"
        },
  ]
  return (
     <div className={styles.mainCOnt} >
         {
            data.map((elem)=>(
              <PaymentCardInner key={elem.id} {...elem} />
           ))
         }
     </div>
  )
}

export default PaymentCard

