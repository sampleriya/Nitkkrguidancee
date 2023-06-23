import React from 'react'
import styles from '../src/Elec.module.css'

import Ex from '../src/images/ex.png';


const Extension = () => {
  return (
   <>
    <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={Ex} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>Brillar 7 Socket Extension Board  </h1>
            <p className={styles.cardtext}>
          
            </p>
            <a target={'blank'} href='https://amzn.to/38y7mYz' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      
    
    </div>
  </div>    
   
   
   
   </>
  )
}

export default Extension