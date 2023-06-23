import React from 'react'
import styles from '../src/Elec.module.css'

import K1 from '../src/images/k1.png';
import K2 from '../src/images/k2.png';
import K3 from '../src/images/k3.png';
import K4 from '../src/images/k4.png';





const kybord = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Zebronics ZEB-KM2100 </h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3x7PMoo' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>HP 100 Wired USB Keyboard</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3KrZzta' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Redgear Blaze Semi-Mechanical wired</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3jcUedi' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K4} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Redgear Shadow Blade Mechanical Keyboard</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3ucLVV8' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    
    </div>
  </div>    
   </>
  )
}

export default kybord