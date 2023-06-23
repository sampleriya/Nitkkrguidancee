import React from 'react'
import styles from './Big.module.css';
import {

  Link,
  Outlet 
} from "react-router-dom";

const Bigmenuu = (props) => {
  return (
   <>
 
<br /><br />

    
<div className={styles.body}>


 <nav className={styles.navbar}>
    <div className={styles.btngroup} >
      
        <Link to={props.a} className={styles.btngroup__item}>{props.a}</Link>
        <Link to={props.b} className={styles.btngroup__item}  >{props.b}</Link>
        <Link to={props.c} className={styles.btngroup__item}   >{props.c}</Link>
        <Link to={props.d} className={styles.btngroup__item}  >{props.d}</Link>
        <Link to={props.a11} className={styles.btngroup__item}  >{props.a11}</Link>
        <Link to={props.a22} className={styles.btngroup__item}  >{props.a22}</Link>
          
        <Link to={props.e} className={styles.btngroup__item} >{props.e}</Link>
        <Link to={props.f} className={styles.btngroup__item}>{props.f}</Link>
        <Link to={props.g} className={styles.btngroup__item}  >{props.g}</Link>
        <Link to={props.h} className={styles.btngroup__item}   >{props.h}</Link>
        <Link to={props.i} className={styles.btngroup__item}  >{props.i}</Link>
          
        <Link to={props.j} className={styles.btngroup__item} >{props.j}</Link>

        <Link to={props.k} className={styles.btngroup__item}>{props.k}</Link>
        <Link to={props.l} className={styles.btngroup__item}  >{props.l}</Link>
        <Link to={props.m} className={styles.btngroup__item}   >{props.m}</Link>
        <Link to={props.n} className={styles.btngroup__item}  >{props.n}</Link>
          
        <Link to={props.o} className={styles.btngroup__item} >{props.o}</Link>
        <Link to={props.p} className={styles.btngroup__item}>{props.p}</Link>
        <Link to={props.q} className={styles.btngroup__item}  >{props.q}</Link>
        <Link to={props.r} className={styles.btngroup__item}   >{props.r}</Link>
        <Link to={props.s} className={styles.btngroup__item}  >{props.s}</Link>
          
        <Link to={props.t} className={styles.btngroup__item} >{props.t}</Link>
        <Link to={props.u} className={styles.btngroup__item} >{props.u}</Link>
        <Link to={props.v} className={styles.btngroup__item}>{props.v}</Link>
        <Link to={props.w} className={styles.btngroup__item}  >{props.w}</Link>
        <Link to={props.x} className={styles.btngroup__item}   >{props.x}</Link>
        <Link to={props.y} className={styles.btngroup__item}  >{props.y}</Link>
          
        <Link to={props.z} className={styles.btngroup__item} >{props.z}</Link>


        <Link to={props.q1} className={styles.btngroup__item}>{props.q1}</Link>
        <Link to={props.w1} className={styles.btngroup__item}  >{props.w1}</Link>
        <Link to={props.e1} className={styles.btngroup__item}   >{props.e1}</Link>
        <Link to={props.r1} className={styles.btngroup__item}  >{props.r1}</Link>
          
        <Link to={props.t1} className={styles.btngroup__item} >{props.t1}</Link>
        <Link to={props.y1} className={styles.btngroup__item}>{props.y1}</Link>
        <Link to={props.u1} className={styles.btngroup__item}  >{props.u1}</Link>
        <Link to={props.i1} className={styles.btngroup__item}   >{props.i1}</Link>
        <Link to={props.o1} className={styles.btngroup__item}  >{props.o1}</Link>
          
        <Link to={props.p1} className={styles.btngroup__item} >{props.p1}</Link>

        <Link to={props.a1} className={styles.btngroup__item}>{props.a1}</Link>
        <Link to={props.s1} className={styles.btngroup__item}  >{props.s1}</Link>


       


    
    </div>
</nav>
<Outlet />


</div>

   
   
   
   </>
  )
}

export default Bigmenuu