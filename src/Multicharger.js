import React from 'react'
import styles from '../src/Elec.module.css'

import Mc from '../src/images/mc.png';
import Mc2 from '../src/images/mc2.png';


const Multicharger = () => {
  return (
   <>
    <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={Mc} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Portronics Adapto  </h1>
            <p className={styles.cardtext}>
          
            </p>
            <a target={'blank'} href='https://amzn.to/3v0IuQC' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={Mc2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Portronics UFO PRO </h1>
            <p className={styles.cardtext}>
          
            </p>
            <a target={'blank'} href='https://amzn.to/3r7bxAR' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      
      
    
    </div>
  </div>    
   
   
   
   </>
  )
}

export default Multicharger