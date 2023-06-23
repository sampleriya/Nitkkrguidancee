import React from 'react'
import styles from '../src/Elec.module.css'

import M2 from '../src/images/z1.png';
import M3 from '../src/images/z2.png';



const writingpd = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Zodo 8.5 inch LCD E-Writing Pad/Tablet Drawing Board</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3jfmXOP' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Portronics Ruffpad 15 inch LCD E-Writing Pad/Tablet Drawing Board</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/35PmOP5' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    
    </div>
  </div>    
   </>
  )
}

export default writingpd