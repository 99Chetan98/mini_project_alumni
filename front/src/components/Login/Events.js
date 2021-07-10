import React , {useEffect,useState,createContext} from 'react';
import Header from './NavHeader';
import {useHistory,NavLink} from 'react-router-dom';
import './style.css';
import  Mates from './Mates';

export const Usercontext=createContext();


function Events() {
    const [user,setuser]=useState([]);
    const history=useHistory();
  const checklogged=async()=>{
        try{
            const res=await fetch("/userlog",{
                method:"GET",
               
                headers:{
                Accept:"application/json",
                'Content-Type':'application/json'
                },
                credentials:"include"
            });
            const data=await res.json();
            // console.log(data);
            setuser(data);
        }catch(e){
            console.log(e);
            history.push('/Login');
        }
        

    }
    
    const [Event,setEvent]=useState([]);
    const fetchevent=async()=>{
        try{
            const res=await fetch("/GetEvents",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    'Content-Type':'application/json'
                    }
            });

            const data=await res.json();
           
            setEvent(data);
            
    }catch(e){
        console.log(e);
    }
    }

    useEffect(() => {
        checklogged();
        fetchevent();
    }, []);
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    
 
    var year={
        "01":"Jan",
        "02":"Feb",
        "03":"Mar",
        "04":"Apr",
        "05":"May",
        "06":"Jun",
        "07":"Jul",
        "08":"Aug",
        "09":"Sept",
        "10":"Oct",
        "11":"Nov",
        "12":"Dec"
}
    return (
    
        <>
            <Header/>
            <div className="container" style={{width:"60%",position:"relative",top:"90px"}}>
            {
                Event.map((e)=>{
                    const str=e.date;
                    var arr=str.split("-");
                    if(Number(arr[2])<=Number(today.getDate()) && Number(arr[1])<=Number(today.getMonth() + 1) && Number(arr[0])<=Number(today.getFullYear())){

                 

                    return(
                        <div className="EventBox" >
                                <h3 onClick={()=>history.push(`/EventInformation/${e._id}`)}><i class="fa fa-calendar" aria-hidden="true"></i> {e.heading}</h3>
                                <h6 >Date: {arr[2]} {year[arr[1]]} {arr[0]} | Time: {e.time}</h6>
                                <hr></hr>
                                <h4  id="news-dis">{e.discription}</h4>

                        </div>
                    )
                    }
                })
            }
            </div>
            <div className="ulbox">
                                <ul>
                                <NavLink to="/UserDash" activeClassName="getact"> <li>Upcoming Events</li></NavLink> 
                                <hr style={{margin:"0px"}}></hr>
                                <NavLink to="/UserDash/PastEvents" activeClassName="getact"> <li  className="activo">Past Events</li></NavLink> 
                                    <hr style={{margin:"0px"}}></hr>
                                    <NavLink to="/UserDash/News" activeClassName="getact"><li >News</li></NavLink>
                                    
                                   
                                </ul>
                        </div>
         
                        
        </>
    )
}

export default Events
