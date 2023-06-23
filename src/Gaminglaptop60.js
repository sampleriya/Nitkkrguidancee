import React from 'react'
import styles from '../src/Elec.module.css'
import lenovo from '../src/images/lenovo.png'
import hp from '../src/images/happavilion.png';
import asus from '../src/images/asus.png';


const Gaminglaptop60 = () => {
  return (
   <>
   <br /><br />
<div className={styles.main}>



    <div className={styles.grid}>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={asus} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>ASUS TUF Gaming F15 </h1>
            <p className={styles.cardtext}>
            <li>Processor: intel i5 10300H 10th Gen</li>
<li>ram: 8GB</li>
<li>graphics card: GTX 1650</li>
<li>storage: 512GB ssd</li>
<li>weight: 2.30 Kg</li>
            </p>
            <a href='https://amzn.to/3j99RCL'
            target={"blank"} className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
      <div className={styles.griditem}>
        <div className={styles.card}>
          <img className={styles.cardimg} src={hp} alt="Rome" />
          <div className={styles.cardcontent}>
            <h1 className={styles.cardheader}>HP Pavilion</h1>
            <p className={styles.cardtext}>
            <li>processor: AMD Ryzen 5 5600H</li>
<li>ram: 8GB</li>
<li>graphics card: GTX 1650</li>
<li>storage: 512GB ssd</li>
<li>weight: 1.98 kg</li>
            </p>
            <a target={'blank'} href='https://amzn.to/3JdGV6X' className={styles.cardbtn}>Visit Amazon <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    
    </div>
  </div>    
   </>
  )
}

export default Gaminglaptop60