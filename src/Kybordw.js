import React from 'react'
import styles from '../src/Elec.module.css'

import K1 from '../src/images/kw.png';






const kybordw = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={K1} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>HP 230 Wireless Keyboard  </h1>
            <p className={styles.cardtext}>
           
            </p>
            <a target={'blank'} href='https://amzn.to/3LLuZem' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
   
    
    
    </div>
  </div>    
   </>
  )
}

export default kybordw