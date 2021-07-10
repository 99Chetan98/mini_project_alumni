import React from 'react'
import {useEffect,useState,useContext} from 'react';
import Header from './NavHeader';
import {useHistory,NavLink} from 'react-router-dom';
import PrintNotification from './PrintNotification';
const Notification = () => {
    const history=useHistory();
    const [userdata,setuserdata]=useState([]);
    const [user,setuser]=useState([]);
    const finNotification=async()=>{
        try{
            const res=await fetch("/userlog",{
                method:"GET",
               
                headers:{
                Accept:"application/json",
                'Content-Type':'application/json'
                }
            });
            const data=await res.json();
            
            setuserdata(data.Notifications.reverse());
            setuser(data);
            
           

                   
        }catch(e){
            console.log(e);
            history.push('/Login');
        }
        
    }
    console.log(userdata);
    useEffect(() => {
        finNotification();
           return ()=>{
               setuserdata([]);
           }
            
    },[])
    return (
        <div>
            <Header/>
            {
                
                userdata.map((e)=>{
                 
                        return(
                            <>
                                <div className="container" style={{position:"relative",top:"100px"}}>
                                        <PrintNotification data={e} user={user.name}/>

                                </div>

                            </>
                        )


                })
            }
             <div className="container" style={{position:"relative",top:"100px"}}>
                                        <div className="NotiBox" style={{position:"relative",top:"90px"}}>
                                             <h1 ><i class="fa fa-bell" aria-hidden="true"></i>Welcome to JNEC Alumni Connect Platform</h1>
                                         </div>
                                         </div>
        </div>
    )
}

export default Notification
