import React from 'react'
import styles from '../src/Elec.module.css'

import W1 from '../src/images/w1.png';
import W2 from '../src/images/w2.png';
import W3 from '../src/images/w3.png';
import W4 from '../src/images/w4.png';





const Wmouse = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={W1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Offbeat RIPJAW upto 3200 DPI 7 Programmable Buttons  </h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3JcMuTq' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={W2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Portronics Toad upto 1200 DPI  no programmable buttons for sleek design</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/36X0vra' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={W3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Zebronics ZEB-KM2100 12 Dedicated Multimedia keys</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3LNLs1B' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={W4} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Coconut WM22 Gold Wireless Gaming Mouse, 500 mAh </h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/372qQE9' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    
    </div>
  </div>    
   </>
  )
}

export default Wmouse