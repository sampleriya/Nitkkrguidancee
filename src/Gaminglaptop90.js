import React from 'react'
import styles from '../src/Elec.module.css'

import asus from '../src/images/asuss.png';
import asusr from '../src/images/happavilion.png';


const Gaminglaptop90 = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={asus} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>ASUS TUF DASH F15   </h1>
            <p className={styles.cardtext}>
            <li>processor: Intel Core i5 11300H</li>
<li>ram: 16GB</li>
<li>graphics card: RTX 3060</li>
<li>storage: 512GB ssd</li>
<li>weight: 2kg</li>
            </p>
            <a target={'blank'} href='https://amzn.to/3r8uJ19' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={asusr} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>HP Pavilion</h1>
            <p className={styles.cardtext}>
            <li>processor: Ryzen 7 5800H</li>
<li>ram: 16GB</li>
<li>graphics card: RTX 3050</li>
<li>storage: 512GB ssd</li>
<li>weight: 1.98kg</li>
            </p>
            
            <a href='https://amzn.to/3LPPSW1'
            target={"blank"} className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    </div>
  </div>    
   </>
  )
}

export default Gaminglaptop90