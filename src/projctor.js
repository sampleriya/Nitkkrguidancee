import React from 'react'
import styles from '../src/Elec.module.css'

import M1 from '../src/images/p1.png';
import M2 from '../src/images/p2.png';
import M3 from '../src/images/p3.png';



const projctor = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>KolorFish 8 Inches HD Screen Magnifier</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/36SyMbf' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Meer YG300 Mini Video Projector</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3Jd5DEv' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>EG 6X Home Theatre Projector</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3v25jDs' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      
    
    
    </div>
  </div>    
   </>
  )
}

export default projctor