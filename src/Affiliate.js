import React from 'react'
import styles from './Aboutmy.module.css';
import {

    Link,
    Outlet 
  } from "react-router-dom";

const Affiliate = () => {
  return (
   <>
   
   <div className={styles.body}>

    
<nav className={styles.navbar}>
   <div className={styles.btngroup} >
       <Link to="elec" className={styles.btngroup__item}>Electronics</Link>
       <Link to='ess' className={styles.btngroup__item}  >Essentials</Link>
       <Link to="health" className={styles.btngroup__item}   >Health Care</Link>
       <Link to="room" className={styles.btngroup__item}  >Room Decor</Link>
         
    
   </div>
</nav>
<Outlet />
</div>
   
   
   </>
  )
}

export default Affiliate