import React from 'react'
import styles from '../src/Elec.module.css'

import M1 from '../src/images/he1.png';
import M2 from '../src/images/he2.png';
import M3 from '../src/images/he3.png';
import M4 from '../src/images/he4.png';



const headphons = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>boAt Rockerz 550 Wireless Headphone 50mm Speaker Driver 20 Hours Playback</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3jaDGTn' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Nu Republic Starboy Wired Headphone 40mm Neodymium Driver</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3ubWrMC' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>boAt Rockerz 370 Wireless Headphone 40mm Dynamic Driver 12 Hours Playback</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3ubocov' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M4} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Tribit XFree Go Wireless Headphone 40mm Speaker Driver 34 Hours Playback</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3JgAUXj' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>

    
    
    </div>
  </div>    
   </>
  )
}

export default headphons