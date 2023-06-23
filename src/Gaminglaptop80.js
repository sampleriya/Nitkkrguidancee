import React from 'react'
import styles from '../src/Elec.module.css'

import asus from '../src/images/asuss.png';
import asusr from '../src/images/asusr.png';


const Gaminglaptop80 = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={asus} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>ASUS TUF Dash F15   </h1>
            <p className={styles.cardtext}>
            <li>processor: AMD Ryzen 5 5600H</li>
<li>ram: 8GB</li>
<li>graphics card: RTX 3050</li>
<li>storage: 512GB ssd</li>
<li>weight: 2.25 kg</li>
            </p>
            <a target={'blank'} href='https://amzn.to/3j9f25w' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={asusr} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>ASUS ROG Strix G17</h1>
            <p className={styles.cardtext}>
            <li>processor: AMD Ryzen 7 4800H</li>
<li>ram: 8GB</li>
<li>graphics card: RTX 3050</li>
<li>storage: 512GB ssd</li>
<li>weight: 2.4kg</li>
            </p>
            
            <a href='https://amzn.to/3LMKzGE'
            target={"blank"} className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    </div>
  </div>    
   </>
  )
}

export default Gaminglaptop80