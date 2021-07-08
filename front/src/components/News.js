import React,{useState,useEffect} from 'react';
import { useHistory,useParams } from 'react-router';
import Head from './Head'
import '../App.css';
import Footer from './Footer';

const News = () => {
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
            <Head/>
            <div className="container eventcomp" style={{top:"60px",marginBottom:"150px"}}>

              
                   

                      
                <div className="EventBox">
                        <h3 ><i class="fa fa-calendar" aria-hidden="true"></i> {event.heading}</h3>
                        <h6 >{event.date}</h6>
                        <hr></hr>
                        <h4 >{event.discription}</h4>
                        </div>






                </div>
                <Footer/>
        </div>
    )
}

export default News
