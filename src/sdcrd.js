import React from 'react'
import styles from '../src/Elec.module.css'

import M1 from '../src/images/s1.png';
import M2 from '../src/images/s2.png';
import M3 from '../src/images/s3.png';
import M4 from '../src/images/s4.png';



const sdcrd = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>SanDisk Ultra microSD Card 32GB</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/35NkbNG' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>SanDisk Ultra microSD Card 64GB</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3DMYaLf' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>SanDisk Ultra microSD Card 128GB</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3DJYnil' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M4} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>SanDisk Ultra microSD Card 256GB</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3ueGFRd' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      
    
    
    </div>
  </div>    
   </>
  )
}

export default sdcrd