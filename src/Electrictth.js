import React from 'react'
import styles from '../src/Elec.module.css'

import Et from '../src/images/et.png';
import Et1 from '../src/images/et1.png';


const Electrictth = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={Et} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Colgate ProClinical 150   </h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3x7So5G' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={Et1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>MI Rechargeable  </h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3NVu4u2' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    
    </div>
  </div>    
   </>
  )
}

export default Electrictth