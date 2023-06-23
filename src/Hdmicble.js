import React from 'react'
import styles from '../src/Elec.module.css'

import M2 from '../src/images/h1.png';
import M3 from '../src/images/h2.png';



const Hdmicble = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>BlueRigger High Speed HDMI to DVI Adapter Cable (3 Feet / 0.9 Meter)</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3JeqQOo' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>BlueRigger High Speed HDMI Cable with Ethernet Supports 3D, 4K 60Hz and Audio Return (3 Feet / 0.9 Meter)</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3Ki5wJ9' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Tizum High Speed HDMI Cable with Ethernet Supports 3D, 4K for All HDMI Devices (5 Feet / 1.5 Meter)</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3JfVfvZ' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    
    </div>
  </div>    
   </>
  )
}

export default Hdmicble