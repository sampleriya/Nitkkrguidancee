import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <>
     <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-4 col-md-12 mb-5">
                <h1 className="mb-3 display-5 text-capitalize text-white"><span className="text-primary">Nit</span>Kurukshetra</h1>
                <p className="m-0">National Institute of Technology Kurukshetra, Haryana is a premier Technical Institute of the region.The Institute offers consultancy services on the design and development problems referred to it by various Govt. and other Industrial Organizations.The infrastructure is geared to enable the Institute to turn out technical personnel of a high quality.</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-primary mb-4">Get In Touch</h5>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>Haryana</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>9627980099</p>
                        <p><i className="fa fa-envelope mr-2"></i>nitkkrunofficial@gmail.com</p>
                       
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-primary mb-4">Popular Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2 ff" ></i>Home</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2 ff"></i>About Us</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2 ff"></i>Our Services</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2 ff"></i>Our Team</a>
                            <a className="text-white" href="#"><i className="fa fa-angle-right mr-2 ff"></i>Contact Us</a>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid text-white py-4 px-sm-3 px-md-5">
        <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white">
                    &copy; <a className="text-white font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by
                    <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
                </p>
            </div>
          
        </div>
    </div>
    
    </>
  )
}

export default Footer