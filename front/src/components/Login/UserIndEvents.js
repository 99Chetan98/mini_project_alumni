import React,{useState,useEffect} from 'react';
import { useHistory,useParams } from 'react-router';
import Header from './NavHeader';
const UserIndEvents = () => {
    const arr=[];
    var history=useHistory();
    const [event,setevent]=useState([]);
    const {id}=useParams();
    useEffect(async() => {
        try{
            const res=await fetch(`/indEvent/${id}`,{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    'Content-Type':'application/json'
                    }
            });

            const data=await res.json();
           
            setevent(data);
            console.log(event);
            var str=data.date;
           arr=str.split("-");

            
    }catch(e){
        console.log(e);
    }
})
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
            <Header/>
            <div className="container eventcomp" style={{top:"100px",marginBottom:"150px"}}>

              
                   

                      
                            <div className="EventBox">
                                    <h3 ><i class="fa fa-calendar" aria-hidden="true"></i> {event.heading}</h3>
                                    <h6 >Date: {arr[2]} {year[arr[1]]} {arr[0]} | Time: {event.time}</h6>
                                    <hr></hr>
                                    <h4 >{event.discription}</h4>
                                    </div>

                      

                   
                

                </div>
            
        </div>
    )
}

export default UserIndEvents
