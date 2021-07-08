import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import Head from './Head'
import '../App.css';
import Footer from './Footer';

const AllEvents = () => {
    var history=useHistory();
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
    useEffect(async() => {
        fetchevent();

    }, [])
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
        <div>
            <Head/>
            <div className="container eventcomp" style={{top:"60px",marginBottom:"100px"}}>
            <h2>All Events</h2>
                <hr></hr>

            {
                Event.map((e)=>{
                    const str=e.date;
                    var arr=str.split("-");
                    return(
                        <div className="EventBox"  style={{borderRadius:"0px",marginBottom:"50px"}}>
                                <h3 onClick={()=>history.push(`/EventInformation/${e._id}`)}><i class="fa fa-calendar" aria-hidden="true"></i> {e.heading}</h3>
                                <h6 >Date: {arr[2]} {year[arr[1]]} {arr[0]} | Time: {e.time}</h6>
                                <hr></hr>
                                <h4  id="news-dis">{e.discription}</h4>

                        </div>
                    )

                })
            }

            </div>
            <Footer/>
        </div>
    )
}

export default AllEvents
