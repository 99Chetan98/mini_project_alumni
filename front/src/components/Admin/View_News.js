import Admin_nav from './Admin_nav';
import React,{useState,useEffect} from 'react';
import { useParams ,useHistory} from 'react-router';
import './Admin.css';

const View_News = () => {
    var history=useHistory();
    const [event,setevent]=useState([]);
    const {id}=useParams();
    useEffect(async() => {
        try{
            const res=await fetch(`/indNews/${id}`,{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    'Content-Type':'application/json'
                    }
            });

            const data=await res.json();
           
            setevent(data);
            console.log(event);


            
    }catch(e){
        console.log(e);
    }


    }, [])
    return (
        <div>
             <Admin_nav/>
            <div className="container eventcomp">

              
                   

                      
                            <div className="EventBox">
                                    <h3 ><i class="fa fa-calendar" aria-hidden="true"></i> {event.heading}</h3>
                                    <h6 >{event.date}</h6>
                                    <hr></hr>
                                    <h4 >{event.discription}</h4>
                                    </div>

                      

                   
                

                </div>
        </div>
    )
}

export default View_News
