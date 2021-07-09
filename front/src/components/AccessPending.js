import {NavLink} from 'react-router-dom';
import React from 'react';

import '../App.css';
import verif from '../img/verification.png'

const AccessPending = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:"720px"}}>
            <div className="Pending-box">
                
            <div className="d-flex justify-content-center"> <img src={verif}/></div>
                    <h1>Verifying Data</h1>
                    <h4>We are verifying your data please stay connected with us we will notify you on email, Thank you</h4>
                    <div className="d-flex justify-content-center"><NavLink to="/" exact><button className="btn btn-primary penbt">Back to Home   <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button></NavLink></div>
            </div>
           
        </div>
    )
}

export default AccessPending
