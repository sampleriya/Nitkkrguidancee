import React from 'react'
import styles from '../src/Elec.module.css'

import C2 from '../src/images/c2.png';
import C1 from '../src/images/c1.png';




const crdreader = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={C1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Brand Conquer 3 in 1 with OTG, SD Card Reader, USB Type C, USB 3.0 and Micro USB, Memory Card</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3xonNBh' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={C2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Quantum QHM5570 Micro SD Card Reader</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3x7wGi9' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    
    </div>
  </div>    
   </>
  )
}

export default crdreader