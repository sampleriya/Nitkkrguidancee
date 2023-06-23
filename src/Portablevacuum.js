import React from 'react'
import styles from '../src/Elec.module.css'

import Pv from '../src/images/pv.png';



const Portablevacuum = () => {
  return (
   <>
    <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={Pv} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>AGARO Regal </h1>
            <p className={styles.cardtext}>
          
            </p>
            <a target={'blank'} href='https://amzn.to/37nCRDV' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
     
      
      
    
    </div>
  </div>    
   
   
   
   </>
  )
}

export default Portablevacuum