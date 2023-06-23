import React from 'react'
import styles from '../src/Elec.module.css'

import monitor from '../src/images/monitor.png';
import ae from '../src/images/ae.png';
import acerr from '../src/images/acerr.png';


const Monitor = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={monitor} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Samsung IPS  </h1>
            <p className={styles.cardtext}>
            <li>resolution: 1920x1080</li>
<li>display type: IPS</li>
<li>refresh rate: 75Hz</li>
<li>dimensions: 24 inch</li>
<li>ports: 1 HDMI, 1 VGA</li>
            </p>
            <a target={'blank'} href='https://amzn.to/3jdfXSq' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={acerr} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Acer Nitro QG221Q   </h1>
            <p className={styles.cardtext}>
            <li>resolution: 1920x1080</li>
<li>display type: LCD</li>
<li>refresh rate: 75Hz</li>
<li>dimensions: 21.5 inch</li>
<li>ports: 1 HDMI, 2 VGA</li>
            </p>
            <a target={'blank'} href='https://amzn.to/3DKs6Yq' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={ae} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Acer Aopen </h1>
            <p className={styles.cardtext}>
            <li>resolution: 1920x1080</li>
<li>display type: LCD</li>
<li>refresh rate: 60Hz</li>
<li>dimensions: 21.5 inch</li>
<li>ports: 1 HDMI, 1 VGA</li>
            </p>
            
            <a href='https://amzn.to/35J8p6O'
            target={"blank"} className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    </div>
  
  </div>    
   </>
  )
}

export default Monitor