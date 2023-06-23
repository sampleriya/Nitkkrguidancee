import React from 'react'
import styles from '../src/Elec.module.css'

import K1 from '../src/images/trig.png';
import K2 from '../src/images/trig1.png';







const Trig = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>RPM Euro Games Pubg Gaming</h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/35JyNgW' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>SpinBot BattleMods X1 </h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3ucUCyM' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
   
    
    
    </div>
  </div>    
   </>
  )
}

export default Trig