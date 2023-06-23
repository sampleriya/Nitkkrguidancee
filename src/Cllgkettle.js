import React from 'react'
import styles from '../src/Elec.module.css'

import Kettle from '../src/images/kettle.png';
import acerr from '../src/images/pres.png';


const Cllgkettle = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={Kettle} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Pigeon Amaze Plus Electric Kettle  </h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3Jj4sUa' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={acerr} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Prestige Electric Kettle  </h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3JdUDXE' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    
    </div>
  </div>    
   </>
  )
}

export default Cllgkettle