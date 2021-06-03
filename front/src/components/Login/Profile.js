import React , {useEffect,useState} from 'react';
import Header from './NavHeader';
import {useHistory} from 'react-router-dom';
import './style.css';
import img from '../../img/default.jpeg';
import Loader from './Loader';
function Profile() {
    const history=useHistory();
    const [userdata,setuserdata]=useState([])
    const checklogged=async()=>{
        try{
            const res=await fetch("/userlog",{
                method:"GET",
               
                headers:{
                Accept:"application/json",
                'Content-Type':'application/json'
                },
               
            });
            const data=await res.json();
            setuserdata(data);
                   
        }catch(e){
            console.log(e);
            history.push('/Login');
        }
        

    }
    useEffect(() => {
        checklogged();
    }, []);
 
    return (
    
        <>
            <Header/>
            <Loader timing={500}/>
            <div className="container">
                <div className="profileBox">  
                    <div className="d-flex justify-content-center" style={{top:"-50px",position:"relative"}}> 
                    <img src={img} alt="" id="profile_pic"/>
                    
                    </div>  
                    
                    <h1>{userdata.name}</h1><hr></hr>

                    
                    <div className="container">
                    <div className="row ">
                        <div className="col-sm-4 ">
                            <h6>Organisation currently working with</h6>
                             <h5> {userdata.organisation}</h5>  
                             <h6>Job Profile</h6>
                             <h5> {userdata.areaofexpert}</h5>  
                             <h6>Gender</h6>
                             <h5> {userdata.gender}</h5>
                        </div>
                        <div className="col-sm-4 ">
                            <h6>E-mail</h6>
                             <h5> {userdata.email}</h5>  
                             <h6>Phone no.</h6>
                             <h5> {userdata.phone}</h5>  
                             <h6>Date of Birth</h6>
                             <h5> {userdata.dob}</h5>
                        </div>
                        <div className="col-sm-4 ">
                            <h6>Association</h6>
                             <h5> {userdata.association}</h5>  
                             <h6>Department</h6>
                             <h5> {userdata.dept}</h5>  
                             <h6>Passing Year</h6>
                             <h5> {userdata.passingYear}</h5>
                        </div>
                    </div>
                    
                    </div>
                    
                </div>

            </div>
           
        </>
    )
}

export default Profile
