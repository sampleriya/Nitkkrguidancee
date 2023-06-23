import React from 'react'
import styles from '../src/Elec.module.css'

import K1 from '../src/images/ps1.png';
import K2 from '../src/images/ps2.png';
import K3 from '../src/images/ps3.png';
import K4 from '../src/images/ps4.png';







const Phonestand = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>pTron Mount DSM1 360° Rotating</h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3NS71zX' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Dyazo Telescopic Multi Angle Adjustable and Foldable </h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3NU7jXi' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Xtore® Universal </h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3ueyjc6' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K4} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Hoteon Mobilife Bluetooth Extendable Selfie Stick with Wireless Remote and Tripod Stand</h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3LIxwWO' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
   
    
    
    </div>
  </div>    
   </>
  )
}

export default Phonestand