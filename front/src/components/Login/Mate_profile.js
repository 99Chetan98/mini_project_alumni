import React from 'react'

import Header from './NavHeader';
import {useEffect,useState} from 'react';
import {useHistory,useLocation} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import img from '../../img/top.jpg';
import { compareSync } from 'bcryptjs';
import Loader from './Loader';

const Mate_profile = () => {
    const [userdata,setuserdata]=useState([]);
    const search = useLocation().search;
    const userid = new URLSearchParams(search).get('user_req');
    console.log(userid)
    useEffect(async() => {
       
        try{
            const res=await fetch(`/matereq/${userid}`,{
                method:"GET",
                
                    headers:{
                        Accept:"application/json",
                        'Content-Type':'application/json'
                        }
               

            })
            const data=await res.json();
            setuserdata(data);

        }catch(e){
            console.log(e);
        }
    }, [])

    return (
        <div>
                    <Header/>
                    <Loader timing={800}/>
                    <div className="container">
                
                <div className="profileBox">  
                
                    <div className=" justify-content-center" style={{top:"-50px",position:"relative",display:"grid",zIndex:"9"}}> 
                    <img src={img} alt="" id="profile_pic"/>
                    

                   
                    </div>  
                   
                    <h1>{userdata.name}</h1>
                    <hr></hr>
                    <div className="container">
                    <div className="row ">
                        <div className="col-sm-4 ">
                            <h6>Organisation currently working with</h6>
                             <h5> {userdata.organisation}</h5>  
                             <h6>Job Profile</h6>
                             <h5> {userdata.areaofexpert}</h5>  

                        </div>
                        <div className="col-sm-4 ">
                            <h6>E-mail</h6>
                             <h5> {userdata.email}</h5>  
                             <h6>Phone no.</h6>
                             <h5> {userdata.phone}</h5>  

                        </div>
                        <div className="col-sm-4 ">

                             <h6>Department</h6>
                             <h5> {userdata.dept}</h5>  
                             <h6>Passing Year</h6>
                             <h5> {userdata.passingYear}</h5>
                        </div>
                    </div>
                    
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}

export default Mate_profile
