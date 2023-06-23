import React from 'react'
import './style.css'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Services = () => {
  return (
    <>
     <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
            <div className="d-flex flex-column text-center mb-5">
                <h4 className="text-secondary mb-3">Our College</h4>
                <h1 className="display-4 m-0"><span className="text-primary">We</span> Provides</h1>
            </div>
            <div className="row pb-3">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3"></h3>
                        <h3 className="mb-3">About College</h3>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                        <Link to="about" className="text-uppercase font-weight-bold" >Click here</Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 className="flaticon-food display-3 font-weight-normal text-secondary mb-3"></h3>
                        <h3 className="mb-3">Clubs</h3>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                        <Link to="club" className="text-uppercase font-weight-bold" >Click here</Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 className="flaticon-grooming display-3 font-weight-normal text-secondary mb-3"></h3>
                        <h3 className="mb-3">Fests</h3>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                        <a className="text-uppercase font-weight-bold" href="">Click here</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 className="flaticon-cat display-3 font-weight-normal text-secondary mb-3"></h3>
                        <h3 className="mb-3">Freshers</h3>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                        <a className="text-uppercase font-weight-bold" href="">Click here</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 className="flaticon-dog display-3 font-weight-normal text-secondary mb-3"></h3>
                        <h3 className="mb-3">Coder's Arena</h3>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                        <a className="text-uppercase font-weight-bold" href="">Click here</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 className="flaticon-vaccine display-3 font-weight-normal text-secondary mb-3"></h3>
                        <h3 className="mb-3">Study Material</h3>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                        <a className="text-uppercase font-weight-bold" href="">Click here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Services