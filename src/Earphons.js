import React from 'react'
import styles from '../src/Elec.module.css'

import E1 from '../src/images/E1.png';
import E2 from '../src/images/E2.png';
import E3 from '../src/images/E3.png';
import E4 from '../src/images/E4.png';
import E5 from '../src/images/E5.png';
import E6 from '../src/images/E6.png';



const Earphons = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={E1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>boAt Bassheads 100 10mm Dynamic Driver</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3DN6ydG' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={E2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>realme Buds 2 Neo 11.2mm Dyanamic Driver</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3Kf9ZfZ' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={E3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>boAt Bassheads 242 10mm Dyanamic Driver</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3DT0S28' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={E4} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Boult Audio BassBuds X1 10mm Extra Bass Driver</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3uegz0E' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={E5} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Apple EarPods with Lightning Connector 10mm Speaker Driver</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3j8Mbyr' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
        <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={E6} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Apple EarPods with 3.5mm Headphone Plug 10mm Speaker Driver</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3jaDu6B' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>


    
    
    </div>
  </div>    
   </>
  )
}

export default Earphons