import React from 'react'
import styles from './Club.module.css'

const Club = () => {
  return (
      <>
    <div className={styles.up}>

   
    <div className={styles.one}>
        <h1>Technical Clubs</h1>
      </div>
   
        <body>

     
      
          <div className={ styles.flexbox}>
              <div className={ styles.flexcardGreen1}>
                <a href="elad.html">
                  <div className={styles.flexcardNumber}>01</div>
                  <div className={styles.flex }>Antariksh</div></a>
              </div>
              <div className={ styles.flexcardGreen2}>
                <div className={styles.flexcardNumber }>02</div>
                <div className={styles.flex }>I-cell</div>
            </div>
            <div className={ styles.flexcardGreen3}>
              <div className={styles.flexcardNumber }>03</div>
              <div className={styles.flex }>Aero <br/> modelling</div>
          </div>
          <div className={styles.flexcardGreen4}>
            <div className={styles.flexcardNumber }>04</div>
            <div className={styles.flex}>EMR</div>
        </div>
        </div>
        </body>

        </div>
        
      
    </>
  )
}

export default Club
