import React from 'react'
import Header from './NavHeader';
import ConReq from './ConReq';
import {useHistory,NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react';

const Pending = (props) => {
    const history=useHistory();
    const [userdata,setuserdata]=useState([]);
    const [load,setload]=useState("block");
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
           return()=>{
               setuserdata([]);
           }
            
    },[])
    setTimeout(function(){ setload("none"); }, 200);
    var tmp;
    return (
        <div>
            <Header/>
            <div className="loading" style={{display:load}}><div className="stick"></div></div>
                      <div className="container find">
                        <div className="row d-flex justify-content-center">
                            
                        {
                            userdata.map((e)=>{
                                
                                if(e.status==0){
                                    tmp=1;
                            
                                return(
                                    <>
                                                <div className="col-md-3 col-sm-2">     
                                                    <ConReq id={e.reqc} opid={1} user={userdata} condition={{but:"true",text:"Pending"}}/>
                                                    </div>
                                    </>
                                )
                                }
                                else{
                                    tmp=0
                                } 
                            })
                        }
                                   {tmp==0?<h1 className="empty">You dont have any pending request now</h1>:<h1 className="empty"></h1>}
                            </div>
                         </div>

             <div className="ulbox">
                                <ul>
                                <NavLink to="/UserDash/Find" activeClassName="getact"> <li >Suggestion</li></NavLink> 
                                <hr style={{margin:"0px"}}></hr>
                                <NavLink to="/UserDash/Find/connection_request" activeClassName="getact"> <li >Connection Request</li></NavLink> 
                                    <hr style={{margin:"0px"}}></hr>
                                    <NavLink to="/UserDash/Find/pending_request" activeClassName="getact"><li className="activo">Pending Request</li></NavLink>
                                    <hr style={{margin:"0px"}}></hr>
                                    <NavLink to="/UserDash/Find/your_mates" activeClassName="getact"><li >Your Mate</li></NavLink>
                                </ul>
                        </div>
        </div>
    )
}

export default Pending
