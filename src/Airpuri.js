import React from 'react'
import styles from '../src/Elec.module.css'

import Ap from '../src/images/ap.png';


const Airpuri = () => {
  return (
   <>
    <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={Ap} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Mi Air Purifier 3  </h1>
            <p className={styles.cardtext}>
          
            </p>
            <a target={'blank'} href='https://amzn.to/3jcLeFk' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
     
      
      
    
    </div>
  </div>    
   
   
   
   </>
  )
}

export default Airpuri