import React from 'react'
import styles from '../src/Elec.module.css'

import M2 from '../src/images/cc1.png';



const cctvcamra = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Mi 360° Home Security Camera 1080P AI Powered Motion Detection Infrared Night Vision</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3Kf2jdD' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      
    
    
    </div>
  </div>    
   </>
  )
}

export default cctvcamra