import React from 'react'
import styles from '../src/Elec.module.css'

import M1 from '../src/images/m1.png';
import M2 from '../src/images/m2.png';
import M3 from '../src/images/m3.png';



const Mousecllg = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Quantum Snype upto 3200 DPI 6 programmable buttons  </h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/35JktF9' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Ant Esports GM320 upto 7200 DPI 8 Programmable Buttons</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3x6tdQW' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Razer DeathAdder upto 6400 DPI 5 programmable buttons</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3J7SoFi' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    
    </div>
  </div>    
   </>
  )
}

export default Mousecllg