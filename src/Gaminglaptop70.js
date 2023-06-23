import React from 'react'
import styles from '../src/Elec.module.css'

import hp from '../src/images/happavilion.png';
import lenovo from '../src/images/lenovo1.png';


const Gaminglaptop70 = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={lenovo} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Lenovo Ideapad  </h1>
            <p className={styles.cardtext}>
            <li>processor: AMD Ryzen 5 5600H</li>
<li>ram: 8GB</li>
<li>graphics card: RTX 3050</li>
<li>storage: 512GB ssd</li>
<li>weight: 2.25 kg</li>
            </p>
            <a target={'blank'} href='https://amzn.to/37k59zi' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={hp} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>HP Pavilion</h1>
            <p className={styles.cardtext}>
            <li>processor: AMD Ryzen 5 5600H</li>
<li>ram: 8GB</li>
<li>graphics card: GTX 1650</li>
<li>storage: 512GB ssd</li>
<li>weight: 1.98 kg</li>
            </p>
            
            <a href='https://amzn.to/3DPxRnN'
            target={"blank"} className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    </div>
  </div>    
   </>
  )
}

export default Gaminglaptop70