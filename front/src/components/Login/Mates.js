import React from 'react'
import Header from './NavHeader';
import ConReq from './ConReq';
import {useHistory,NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react';
const Notification = () => {
    const history=useHistory();
    const [userdata,setuserdata]=useState([]);
    const finbatch=async()=>{
        try{
            const res=await fetch("/userlog",{
                method:"GET",
               
                headers:{
                Accept:"application/json",
                'Content-Type':'application/json'
                },
               
            });
            const data=await res.json();
            
            setuserdata(data.conreq.reverse());

                   
        }catch(e){
            console.log(e);
            history.push('/Login');
        }
        
    }

    useEffect(() => {
            finbatch();
           
            
    },[])

    return (
        <div>
            <Header/>
                      <div className="container find">
                        <div className="row d-flex justify-content-center">
                            
                        {
                            userdata.map((e)=>{
                                if(e.status==2){
                            
                                return(
                                    <>
                                                <div className="col-md-3 col-sm-2">     
                                                    <ConReq id={e.reqc} opid={2}/>
                                                    </div>
                                    </>
                                )
                                }
                            })
                        }
                                 
                            </div>
                         </div>

             <div className="ulbox">
                                <ul>
                                <NavLink to="/UserDash/Notification" activeClassName="getact"> <li >Connection Request</li></NavLink> 
                                    <hr style={{margin:"0px"}}></hr>
                                    <NavLink to="/UserDash/Notification/pending_request"activeClassName="getact" ><li >Pending Request</li></NavLink>
                                    <hr style={{margin:"0px"}}></hr>
                                    <NavLink to="/UserDash/Notification/your_mates" activeClassName="getact"><li className="activo">Your Mate</li></NavLink>
                                </ul>
                        </div>
        </div>
    )
}

export default Notification
