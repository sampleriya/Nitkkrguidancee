import React from 'react'
import NavBar from './NavBar.js'
import Slide from './Slide.js'
import Gallery from './Gallery.js'
import About from './About.js'

import Services from './Services.js'
import Team from './Team.js'
import Facilities from './Facilities'
import Facdibbe from './Facdibbe'



import Aboutmy from './Aboutmy.js'
import Fee from './Fee.js'
import Comp from './Comp.js'
import Nirf from './Nirf.js'
import Footer from './Footer.js'
import Faq from './Faq.js'
import Club from './Club.js'
import Gaminglaptop70 from './Gaminglaptop70.js'
import Gaminglaptop80 from './Gaminglaptop80.js'
import Gaminglaptop1 from './Gaminglaptop1.js'
import Notebook from './Notebook.js'
import Monitor from './Monitor.js'
import Extension from './Extension.js'
import Multicharger from './Multicharger.js'
import Kybord60 from './Kybord60.js'
import Kybordw from './Kybordw.js'
import Kybordw60 from './kybordw60'
import Controllerw from './Controllerw.js'
import Trig from './Trig.js'
import Phonestand from './Phonestand.js'
import Ironn from './Ironn.js'
import Bigmenuu from './Bigmenuu'
import Earphons from './Earphons';
import Exthrddrive from './Exthrddrive';
import Hdmicble from './Hdmicble';
import Headphons from './headphons';
import Lancble from './Lancble';
import Lantousbcble from './Lantousbcble';
import Powerbnk from './powerbnk';
import Projector from './projctor';
import SdCrd from './sdcrd';
import Wirelessbluetoothearphons from './wirelessbluetoothearphons';
import Writingpd from './writingpd';
import Cctvcamra from './cctvcamra';









import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Overview from './Overview.js'
import Placement from './Placement.js'
import Gaminglaptop from './Gaminglaptop.js'
import Gaminglaptop60 from './Gaminglaptop60.js'
import Gaminglaptop90 from './Gaminglaptop90.js'
import Affiliate from './Affiliate.js'
import Wireless from './Wireless.js'
import Portablevacuum from './Portablevacuum.js'
import Airpuri from './Airpuri.js'
import Kettle from './Cllgkettle'
import Electrictth from './Electrictth.js'
import Mousecllg from './Mousecllg.js'
import Wmouse from './Wmouse.js'
import Crdreader from './Crdreader.js'
import Kybord from './kybord.js'
import Controller from './Controller.js'
import Aboutclgg from './Aboutcllgg.js'
import Bigmenu from './Bigmenuu.js'




const App = () => {
  return (
    <>
  

<Router>

<NavBar/>


<Routes> 


   <Route path="/" element={
     
     <>

    <br /> <br />
     <Slide/>
 
     <About/>
     <Services/>
     <Team/>
     <Footer/>
    
     </>
  
  
  
  } />
   <Route path="/club" element={
     
     <>

   <Club/>
     </>
  
  
  
  } />
  <Route path="/facilities" element={
     
     <>

   <Facilities/>
   <Facdibbe/>
     </>
  
  
  
  } />
  <Route path='faq' element={
    <Faq/>
  }/>

  <Route path="/gaminglaptop" element={
     
     <>

  <Gaminglaptop/>
    
     </>
  
  
  
  } />
        <Route path="gaminglaptop60" element={
          <>
          
          
          <br /><br />
          <Gaminglaptop60 />
          </>
        } 
          
          
          />
             <Route path="gaminglaptop70" element={
          <>
          
          
          <br /><br />
          <Gaminglaptop70 />
          </>
        } 
          
          
          />
          
             <Route path="gaminglaptop90" element={
          <>
          
          
          <br /><br />
          <Gaminglaptop90 />
          </>
        } 
          
          
          />
            <Route path="gaminglaptop80" element={
          <>
          
          
          <br /><br />
          <Gaminglaptop80 />
          </>
        } 
          
          
          />
            <Route path="gaminglaptop1" element={
          <>
          
          
          <br /><br />
          <Gaminglaptop1 />
          </>
        } 
          
          
          />
            <Route path="notebook" element={
          <>
          
          
          <br /><br />
          <Notebook />
          </>
        } 
          
          
          />
           
          
          
          
          
                 
          
  




  <Route path="about" element={<>
  <Aboutclgg/>
  <Aboutmy firstlink="overview" secondlink="pla" thirdlink="fee" fourthlink="nirf" fifthlink="comp"  first="Overview" 
  second="Placement" third="Fee" fourth="Nirf" fifth="Companies" /></>}>
  <Route index element={  <><br /><br /><Overview /></>} />
          <Route path="overview" element={<><br /><br /> <Overview /></>} />
          <Route path="pla" element={  <><br /><br /><Placement /></>} />
          <Route path="fee" element={  <><br /><br /><Fee /></>} />
          <Route path="comp" element={  <><br /><br /><Comp /></>} />
          <Route path="nirf" element={  <><br /><br /><Nirf /></>} />
        </Route>




        

  
        <Route path="shopping" element={
  <>
  <Aboutmy firstlink="/electronics" secondlink="essentials" thirdlink="healthcare" fourthlink="homedecor" fifthlink="laptop"  first="Electronics" second="Essentials" third="HealthCare" fourth="Homedecor" fifth="Laptops"  />
  </>
  }>





  </Route>


          <Route path="electronics" element={
          <>
          <br /><br />
          <Bigmenuu a="monitor" b="multicharger" a11="portablevacuum" a22="extension"  c="wirelesscharger" d="airpurifier" e="ekettle" f="etoothbrush" g="mouse" h="wirelessmouse" i="keyboard" j="60keyboard" k="wirelesskeyboard" l="60wirelesskeyboard" m="controller" n="wirelesscontroller" o="gamingtriggers" p="phonestands" q="iron" r="mousepad" s="laptopcooler" t="scificalculator" u="lantousb" v="cables" w="pendrive" x="bluetoothspeakers" y="massager" z="earphones" q1="headphones" w1="wirelessBluetootherphones" e1="projector" r1="powerbank" t1="cctvcamera" y1="lcdwritingpad" u1="extharddrive" i1="sdcard" o1="cardreader" p1="hdmicable" a1="lancable" s1="lantousbcable" />
          </>
        }> 
         <Route index element={  <><br /><br /><Monitor /></>} />
         <Route path="monitor" element={  <><br /><br /><Monitor /></>} />
         <Route path="earphones" element={  <><br /><br /><Earphons /></>} />
         <Route path="extharddrive" element={  <><br /><br /><Exthrddrive /></>} />
         <Route path="hdmicable" element={  <><br /><br /><Hdmicble /></>} />
         <Route path="headphones" element={  <><br /><br /><Headphons /></>} />
         <Route path="lancable" element={  <><br /><br /><Lancble /></>} />
         <Route path="lantousbcable" element={  <><br /><br /><Lantousbcble /></>} />
         <Route path="powerbank" element={  <><br /><br /><Powerbnk /></>} />
         <Route path="projector" element={  <><br /><br /><Projector /></>} />
         <Route path="sdcard" element={  <><br /><br /><SdCrd /></>} />
         <Route path="lcdwritingpad" element={  <><br /><br /><Writingpd /></>} />
         <Route path="cctvcamera" element={  <><br /><br /><Cctvcamra /></>} />
         <Route path="wirelessBluetootherphones" element={  <><br /><br /><Wirelessbluetoothearphons /></>} />
         <Route path="etoothbrush" element={<> <br /><br /> <Electrictth /></>}   />
         <Route path="keyboard" element={
          <>
          
          
          <br /><br />
          <Kybord />
          </>
        } 
          
          
          />
           <Route path="60keyboard" element={
          <>
          
          
          <br /><br />
          <Kybord60 />
          </>
        } 
          
          
          />
             <Route path="Controller" element={
          <>
          
          
          <br /><br />
          <Controller />
          </>
        } 
          
          
          />
             <Route path="wirelessController" element={
          <>
          
          
          <br /><br />
          <Controllerw />
          </>
        } 
          
          
          />
           <Route path="wirelesskeyboard" element={
          <>
          
          
          <br /><br />
          <Kybordw />
          </>
        } 
          
          
          />
            <Route path="iron" element={
          <>
          
          
          <br /><br />
          <Ironn />
          </>
        } 
          
          
          />
          
          <Route path="gamingtriggers" element={
          <>
          
          
          <br /><br />
          <Trig />
          </>
        } 
          
          
          />
          
          <Route path="phonestands" element={
          <>
          
          
          <br /><br />
          <Phonestand />
          </>
        } 
          
          
          />
           <Route path="wirelesscharger" element={
          <>
          
          
          <br /><br />
          <Wireless />
          </>
        } 
          
          
          />
             <Route path="60wirelesskeyboard" element={
          <>
          
          
          <br /><br />
          <Kybordw60 />
          </>
        } 
          
          
          />
           <Route path="mouse" element={
          <>
          
          
          <br /><br />
          <Mousecllg />
          </>
        } 
          
          
          />
          <Route path="airpurifier" element={
          <>
          
          
          <br /><br />
          <Airpuri />
          </>
        } 
          
          
          />
          
          <Route path="wirelessmouse" element={
          <>
          
          
          <br /><br />
          <Wmouse />
          </>
        } 
          
          
          />
          
          <Route path="cardreader" element={
          <>
          
          
          <br /><br />
          <Crdreader />
          </>
        } 
          
          
          />
           <Route path="ekettle" element={
          <>
          
          
          <br /><br />
          <Kettle />
          </>
        } 
          
          
          />
            <Route path="extension" element={
          <>
          
          
          <br /><br />
          <Extension />
          </>
        } 
          
          
          />
            <Route path="multicharger" element={
          <>
          
          
          <br /><br />
          <Multicharger />
          </>
        } 
          
          
          />
         
           <Route path="portablevacuum" element={
          <>
          
          
          <br /><br />
          <Portablevacuum />
          </>
        } 
          
          
          />

          </Route>
    
       
        



        <Route path="affiliate" element={<Affiliate />}>
  <Route index element={  <>
          
          
          <br /><br />
          <Gaminglaptop />
          </>} />
          
          <Route path="gaminglaptop" element={
          <>
          
          
          <br /><br />
          <Gaminglaptop />
          </>
        } 
          
          
          />
          
     
       

</Route>


</Routes>

    
  
   



    </Router>
    </>
  )
}



export default App
