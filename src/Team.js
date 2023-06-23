import React from 'react'
import './Team.css'
import campus3 from '../src/images/campus3.png'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import gaurav from '../src/images/guarav.png';
  import atul from '../src/images/atul.jpg';
  import pooja from '../src/images/pooja.jpeg';
  import aanchal from '../src/images/aanchal.jpeg';
  import addy from '../src/images/addy.png';
  import ujjawal from '../src/images/ujjawal.png';
  import sam from '../src/images/sam.jpeg';
  import lak from '../src/images/lak.jpeg';
  import san from '../src/images/sanjana.png';
  import riya from '../src/images/riya.png';



const Team = () => {
   
  return (
      
    <>
      	<section id="team">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
					<div className="sec-heading text-center">
						<h6>Team Members</h6>
					</div>
				</div>
			</div>
		</div>
		<div className="testimonial-box">
            	
			<div className="container">
				<div className="row">
                <OwlCarousel items={5}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
								<div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src={ujjawal}/>
                               
								
                                    <a  href="https://www.instagram.com/tyagi_ujjawal_/"
        className="instagram social">
      
        <FontAwesomeIcon icon={faInstagram} size="1x" /> 
        <p className='pp'>tyagi_ujjawal</p>
    
      </a>
								</div>
                                <div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src={pooja}/>
                               
								
                               <a  href="https://www.instagram.com/poojaagarwal_22/"
   className="instagram social">
 
   <FontAwesomeIcon icon={faInstagram} size="1x" /> 
   <p className='pp'>poojaagarwal_22</p>

 </a>
                           </div>
                           <div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src={gaurav}/>
                               
								
                               <a  href="https://www.instagram.com/i_gauravkishore/"
   className="instagram social">
 
   <FontAwesomeIcon icon={faInstagram} size="1x" /> 
   <p className='pp'>i_gauravkishore</p>

 </a>
                           </div>
                           <div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src={riya}/>
                               
								
                               <a  href="https://www.instagram.com/riyajain_0807/"
   className="instagram social">
 
   <FontAwesomeIcon icon={faInstagram} size="1x" /> 
   <p className='pp'>riyajain_0807</p>

 </a>
                           </div>
                           <div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src={atul}/>
                               
								
                               <a  href="https://www.instagram.com/anonyme_atul/"
   className="instagram social">
 
   <FontAwesomeIcon icon={faInstagram} size="1x" /> 
   <p className='pp'>anonyme_atul</p>

 </a>
                           </div>
                           <div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src={aanchal}/>
                               
								
                               <a  href="https://www.instagram.com/aanchal_1401/"
   className="instagram social">
 
   <FontAwesomeIcon icon={faInstagram} size="1x" /> 
   <p className='pp'>aanchal_1401

</p>

 </a>
                           </div>
                           <div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src={addy}/>
                               
								
                               <a  href="https://www.instagram.com/heheaadyyy/"
   className="instagram social">
 
   <FontAwesomeIcon icon={faInstagram} size="1x" /> 
   <p className='pp'>heheaadyyy</p>

 </a>
                           </div>
                           <div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src={sam}/>
                               
								
                               <a  href="https://www.instagram.com/yadavsamiksha461/"
   className="instagram social">
 
   <FontAwesomeIcon icon={faInstagram} size="1x" /> 
   <p className='pp'>yadavsamiksha461</p>

 </a>
                           </div>
                           <div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src={lak}/>
                               
								
                               <a  href="https://www.instagram.com/lakshay._.kansal/"
   className="instagram social">
 
   <FontAwesomeIcon icon={faInstagram} size="1x" /> 
   <p className='pp'>lakshay._.kansal</p>

 </a>
                           </div>
                           <div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src={san}/>
                               
								
                               <a  href="https://www.instagram.com/___snjna.g___/"
   className="instagram social">
 
   <FontAwesomeIcon icon={faInstagram} size="1x" /> 
   <p className='pp'>___snjna.g___</p>

 </a>
                           </div>
								{/* <div className="img-area"><img alt="" className="img-fluid move-animation" src="https://i.postimg.cc/vmCM14qL/2.png"/></div>
								<div className="img-area"><img alt="" className="img-fluid move-animation" src="https://i.postimg.cc/TYTxWM9S/3.png"/></div>
								<div className="img-area"><img alt="" className="img-fluid move-animation" src="https://i.postimg.cc/593GTHB7/4.png"/></div>
								<div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src="https://i.postimg.cc/65VQDfjs/1.png"/></div>
								<div className="img-area"><img alt="" className="img-fluid move-animation" src="https://i.postimg.cc/vmCM14qL/2.png"/></div>
								<div className="img-area"><img alt="" className="img-fluid move-animation" src="https://i.postimg.cc/TYTxWM9S/3.png"/></div>
								<div className="img-area"><img alt="" className="img-fluid move-animation" src="https://i.postimg.cc/593GTHB7/4.png"/></div> */}
      </OwlCarousel>  
					<div className="col-lg-12">
						<div className="team-slider owl-carousel">
							<div className="single-box text-center">
								<div className="img-area"><img alt="dfsfsa" className="img-fluid move-animation" src="https://i.postimg.cc/65VQDfjs/1.png"/></div>
								<div className="info-area">
									<h4>Person's Name</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, ullam.</p><a href="/">Learn More</a>
								</div>
							</div>
							<div className="single-box text-center">
								<div className="img-area"><img alt="" className="img-fluid move-animation" src="https://i.postimg.cc/vmCM14qL/2.png"/></div>
								<div className="info-area">
									<h4>Person's Name</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, ullam.</p><a href="/">Learn More</a>
								</div>
							</div>
							<div className="single-box text-center">
								<div className="img-area"><img alt="" className="img-fluid move-animation" src="https://i.postimg.cc/TYTxWM9S/3.png"/></div>
								<div className="info-area">
									<h4>Person's Name</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, ullam.</p><a href="/">Learn More</a>
								</div>
							</div>
							<div className="single-box text-center">
								<div className="img-area"><img alt="" className="img-fluid move-animation" src="https://i.postimg.cc/593GTHB7/4.png"/></div>
								<div className="info-area">
									<h4>Person's Name</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, ullam.</p><a href="/">Learn More</a>
								</div>
							</div>
							<div className="single-box text-center">
								<div className="img-area"><img alt="" className="img-fluid move-animation" src="https://i.postimg.cc/tJCrp53r/5.png"/></div>
								<div className="info-area">
									<h4>Person's Name</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, ullam.</p><a href="/">Learn More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Team