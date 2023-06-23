import React from 'react'
import styles from '../src/Elec.module.css'
import an from '../src/images/antariksh.jpg';
import redmi from '../src/images/redmi.png'
import laptop from '../src/images/laptop.jpg'
import lenovo from '../src/images/lenovo.png'

const elec = () => {
  return (

<>
<br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={redmi} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Redmi Book Pro</h1>
            <p className={styles.cardtext}>
            <li>Processor: intel i5 11th Gen 11300H</li>
<li>ram: 8GB</li>
<li>storage: 512GB ssd</li>
<li>weight: 1.8 kg</li>
            </p>
            <a href='https://amzn.to/35M0mWV'
            target={"blank"} className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={lenovo} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Lenovo Ideapad 3 </h1>
            <p className={styles.cardtext}>
            <li>Processor: AMD Ryzen 5 5500U</li>
<li>ram: 8GB</li>
<li>storage: 512GB ssd</li>
<li>weight: 1.65 kg</li>
            </p>
            <a target={'blank'} href='https://amzn.to/3j8WKBq' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    </div>
  </div>    

</>

    )
}

export default elec