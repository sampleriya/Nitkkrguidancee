import React from 'react'
import './style.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const NavBar = () => {
  return (
    <>
  

   <div class="container-fluid">
       
        <div class="row py-3 px-lg-5">
            <div class="col-lg-4">
                <a href="/" class="navbar-brand d-none d-lg-block">
                    <h1 class="m-0 display-5 text-capitalize"><span class="text-primary">Nit</span>Kurukshetra <span class="text-primary">- एन आई टी </span>कुरुक्षेत्र</h1>
                </a>
            </div>
            <div class="col-lg-8 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    {/* <div class="d-inline-flex flex-column text-center pr-3 border-right">
                        <h6>Opening Hours</h6>
                        <p class="m-0">8.00AM - 9.00PM</p>
                    </div> */}
                    <div class="d-inline-flex flex-column text-center px-3 border-right">
                        <h6>Email Us</h6>
                        <p class="m-0">nitkkrunofficial@gmail.com</p>
                    </div>
                    <div class="d-inline-flex flex-column text-center pl-3">
                        <h6>Call Us</h6>
                        <p class="m-0">9627980099</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
            <a href="/" class="navbar-brand d-block d-lg-none">
                <h1 class="m-0 display-5 text-capitalize font-italic text-white"><span class="text-primary">Nit</span>Kurukshetra</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                <div class="navbar-nav mr-auto py-0">
                   
                    <Link to="/" class="nav-item nav-link active">Home</Link>
                   
                    <Link to="/about" class="nav-item nav-link ">About College</Link>
                    <Link to="/about"  class="nav-item nav-link ">Gallery</Link>
                    <Link to="/shopping"  class="nav-item nav-link ">Shopping for Collge😍</Link>
                    <Link to="/facilities"  class="nav-item nav-link ">Facilities😊</Link>

                    {/* <a href="price.html" class="nav-item nav-link">Price</a>
                    <a href="booking.html" class="nav-item nav-link">Booking</a>
                    <div class="nav-item dropdown">
                        <a href="/" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="blog.html" class="dropdown-item">Blog Grid</a>
                            <a href="single.html" class="dropdown-item">Blog Detail</a>
                        </div>
                    </div> */}
                    <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                </div>
                <Link to="/gaminglaptop" class="btn btn-lg btn-primary px-3 d-none d-lg-block">Notices</Link>
            </div>
        </nav>
    </div>
   
    
    </>
  )
}

export default NavBar
