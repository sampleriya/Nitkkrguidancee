import React from 'react'
import styles from '../src/Elec.module.css'

import M2 from '../src/images/l1.png';
import M3 from '../src/images/l2.png';



const Lancble = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M2} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Quantum RJ45 Ethernet LAN Cable with Gold Plated Connectors Supports Upto 1000Mbps (3 Meters)</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3DOzQsv' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={M3} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Quantum RJ45 Ethernet LAN Cable with Heavy Duty Gold Plated Connectors Supports Upto 1000Mbps (10 Meters)</h1>
            <p className={styles.cardtext}>
       
            </p>
            <a target={'blank'} href='https://amzn.to/3x8LvRU' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      
    
    
    </div>
  </div>    
   </>
  )
}

export default Lancble