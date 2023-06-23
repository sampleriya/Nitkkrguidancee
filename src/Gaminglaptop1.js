import React from 'react'
import styles from '../src/Elec.module.css'

import acer from '../src/images/acer.png';
import dell from '../src/images/dell.png';


const Gaminglaptop1 = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={acer} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Acer Nitro 5   </h1>
            <p className={styles.cardtext}>
            <li>processor: AMD Ryzen 7 5800H</li>
<li>ram: 16GB</li>
<li>graphics card: RTX 3060 (6GB)</li>
<li>storage: 256GB ssd 1TB hdd</li>
<li>weight: 2.4kg</li>
            </p>
            <a target={'blank'} href='https://amzn.to/38xJPHg' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={dell} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Dell G15</h1>
            <p className={styles.cardtext}>
            <li>processor: Intel i7 10870H 10th Gen</li>
<li>ram: 16GB ra</li>
<li>graphics card: RTX 3050 Ti</li>
<li>storage: 512GB</li>
<li>weight: 2.4kg</li>
            </p>
            
            <a href='https://amzn.to/3jcIojw'
            target={"blank"} className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    </div>
  </div>    
   </>
  )
}

export default Gaminglaptop1