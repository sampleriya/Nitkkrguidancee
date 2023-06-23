import React from 'react'
import styles from '../src/Elec.module.css'

import Wire from '../src/images/wire.png';


const Wireless = () => {
  return (
   <>
    <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={Wire} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>pTron Bullet Wireless </h1>
            <p className={styles.cardtext}>
          
            </p>
            <a target={'blank'} href='https://amzn.to/35JkOYr' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
     
      
      
    
    </div>
  </div>    
   
   
   
   </>
  )
}

export default Wireless