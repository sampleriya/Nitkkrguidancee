import React from 'react'

import styles from './Aboutmy.module.css';

import Overview from './Overview';


import {

  Link,
  Outlet 
} from "react-router-dom";

const Aboutmy = (props) => {
  return (
    <>
  
<br /><br />

    
    <div className={styles.body}>

    
     <nav className={styles.navbar}>
        <div className={styles.btngroup} >

          
          
            <Link to={props.firstlink} className={styles.btngroup__item}>{props.first}</Link>
            <Link to={props.secondlink} className={styles.btngroup__item}  >{props.second}</Link>
            <Link to={props.thirdlink} className={styles.btngroup__item}   >{props.third}</Link>
            <Link to={props.fourthlink} className={styles.btngroup__item}  >{props.fourth}</Link>
              
            <Link to={props.fifthlink} className={styles.btngroup__item} >{props.fifth}</Link>
          

           


        
        </div>
    </nav>
    <Outlet />
    </div>
 
    </>
  )
}

export default Aboutmy