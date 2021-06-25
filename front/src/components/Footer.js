import { Mongoose } from 'mongoose'
import React from 'react'
import { Component } from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small brown">


                <div className="container-fluid  text-md-left"  style={{marginTop:"30px"}}>


                <div className="row">


                    <div className="col-md-6  mtt-3">


                    <h5 className="text-uppercase"><a href="https://jnec.org/">Jawaharlal Nehru Engineering College</a></h5>
                    <h5 className="add">
                            MGM Campus, CIDCO, N-6,
                            Aurangabad - 431003 Maharashtra (INDIA)
                            </h5>
                    <p>Jawaharlal Nehru Engineering College is a premier institute
                         of engineering that has carved a niche for itself in the 
                         field of technical education in a very short span of time.
                          The college has made its presence felt in the world of technical education.</p>
                   <a href="https://mgmu.ac.in/"> <button className="uni_btn"><i class="fa fa-university" aria-hidden="true"></i> MGM University</button></a>

                    </div>
                
                    <hr className="clearfix w-100 d-md-none pb-3"/>

                
                    <div className="col-md-3 mbb-3">
                    <h5 className="text-uppercase">Quick Links</h5>

                    <ul className="list-unstyled">
                        <li>
                        <a href="#!"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
                        </li>
                        <li>
                        <a href="#!"><i className="fa fa-info-circle" aria-hidden="true"></i> About</a>
                        </li>
                        <li>
                        <a href="#!"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</a>
                        </li>
                        <li>
                        <a href="#!"><i className="fa fa-id-card" aria-hidden="true"></i> Register</a>
                        </li>
                        <li>
                        <a href="#!"><i className="fa fa-picture-o" aria-hidden="true"></i> Gallery</a>
                        </li>
                    </ul>

                    </div>


                    <div className="col-md-3 mb-md-0 mbb-3">
                    <h5 className="text-uppercase">Contact us</h5>

                    <ul className="list-unstyled">
                        <li>
                        <i class="fa fa-phone-square" aria-hidden="true"></i> Tel : 0240-2481433,0240-2482236
                        </li>
                        <li>
                        <i class="fa fa-fax" aria-hidden="true"></i> Fax no :  0240-2482235
                        </li>
                        <li>
                        <i class="fa fa-envelope" aria-hidden="true"></i>  Email : principal@jnec.ac.in
                        </li>

                    </ul>
                    <h5 className="text-uppercase ">Follow Us On</h5>
                    <i class="fa fa-facebook ico" aria-hidden="true"></i>
                    <i class="fa fa-twitter ico" aria-hidden="true"></i>
                    <i class="fa fa-linkedin ico" aria-hidden="true"></i>
                    <i class="fa fa-youtube-play ico" aria-hidden="true"></i>
                    </div>


                </div>


                </div>



                <div className="footer-copyright text-center py-3" style={{color:"white"}}>©2020 Jawaharlal Nehru Engineering College
                </div>


                </footer>
        </div>
        
        
    )
}

export default Footer



        

