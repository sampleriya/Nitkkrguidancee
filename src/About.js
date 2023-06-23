import React from 'react'
import './style.css'
import campus3 from '../src/images/campus3.png'

const About = () => {
    const mystyle = {
        color: "red"
      };
  return (
   
   <>
    <div className="container py-5">
        <div className="row py-5">
            <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
            
                <h1 className="display-4 mb-4"><span className="text-primary">Welcome to</span>  <span className="text-secondary">Nit Kurukshetra</span></h1>
                <h5 className="text-muted mb-3" style={mystyle}>National Institute of Technology Kurukshetra, Haryana is a premier Technical Institute of the region.The Institute offers consultancy services on the design and development problems referred to it by various Govt. and other Industrial Organizations.The infrastructure is geared to enable the Institute to turn out technical personnel of a high quality.</h5>
                {/* <ul className="list-inline">
                    <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>Best In Industry</h5></li>
                    <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>Emergency Services</h5></li>
                    <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>24/7 Customer Support</h5></li>
                </ul> */}
                {/* <a href="" className="btn btn-lg btn-primary mt-3 px-4">Learn More</a> */}
            </div>
            <div className="col-lg-5">
                <div className="row px-3">
                    <div className="col-12 p-0">
                        <img className="img-fluid w-100" src={campus3} alt=""/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
   
   
   </>
  )
}

export default About