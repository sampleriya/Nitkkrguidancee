import React from 'react'
import './style.css'
import campus3 from '../src/images/campus3.png';
import campus10 from '../src/images/campus10.png';
import campuss3 from '../src/images/campuss3.png';
import campuss5 from '../src/images/campuss5.png';




const Slide = () => {
    const mystyle = {
        width: "45px",
         height: "45px"
      };
      const mystylee = {
        width: "45px",
         height: "45px"
      };
  return (
    <>
    
    <div className="container">

    
    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={campus3} alt="dd"/>
                   
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={campuss5} alt="ee"/>
                    
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={campuss3} alt="ee"/>
                    
                </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-primary rounded" style={mystyle} >
                    <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-primary rounded"  style={mystylee} >
                    <span className="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    </div>
    </div>
 
    </>
  )
}

export default Slide