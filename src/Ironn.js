import React from 'react'
import styles from '../src/Elec.module.css'

import K1 from '../src/images/ir1.png';
import K2 from '../src/images/ir2.png';







const Ironn = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>USHA Armor AR1100WB</h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3x96N1v' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Philips Classic GC097</h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3NQpXiK' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
   
    
    
    </div>
  </div>    
   </>
  )
}

export default Ironn