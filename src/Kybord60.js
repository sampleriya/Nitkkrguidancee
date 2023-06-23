import React from 'react'
import styles from '../src/Elec.module.css'

import K1 from '../src/images/k11.png';
import K2 from '../src/images/k22.png';
import K3 from '../src/images/k33.png';





const kybord60 = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Redragon K630 Dragonborn 60% </h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3jakkOd' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Ant Esports MK1300 Mini Wired Mechanical </h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3udn43B' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Cosmic Byte CB-GK-21 Themis 61 Key Mechanical</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3r5ypkp' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
     
    
    
    </div>
  </div>    
   </>
  )
}

export default kybord60