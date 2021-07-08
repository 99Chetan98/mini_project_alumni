import Admin_nav from './Admin_nav';
import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import './Admin.css';

const Event_Comp = () => {
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
const Delete=async(id)=>{
    var sta=window.confirm("are sure you want to delete this data");
    if(sta){
        try{

            const res=await fetch("/deleteEve",{
                 method:"POST",
                 headers:{
                     Accept:"application/json",
                     'Content-Type':'application/json'
                     },
                     body:JSON.stringify({
                         id
                     })
                 
             })
             const status=await res.json();
             if(status.msg=="deleted"){
                 window.alert("Event Deleted");
                 fetchevent();
             }
             else{
                 window.alert("Problem while deleting");
                 
     
             }
     
         }catch(e){
             console.log(e);
         }
    }
    

}
    return (
        <div>
            <Admin_nav/>
                        <div className="container eventcomp">

                            {
                                Event.map((e)=>{
                                    const str=e.date;
                                    var arr=str.split("-");
                                    return(
                                        <div className="EventBox">
                                                <h3 onClick={()=>history.push(`/View_Event/${e._id}`)}><i class="fa fa-calendar" aria-hidden="true"></i> {e.heading}</h3>
                                                <h6 >Date: {arr[2]} {year[arr[1]]} {arr[0]} | Time: {e.time}</h6>
                                                <hr></hr>
                                                <h4  id="news-dis">{e.discription}</h4>
                                                <div style={{display:"flex",justifyContent:"flex-end",marginTop:"15px"}}>
                                                        <button className="btn btn-primary" onClick={()=>history.push(`/Edit_Event/${e._id}`)}>Edit</button>
                                                        <button className="btn btn-outline-danger" style={{marginLeft:"15px"}} onClick={()=>Delete(e._id)}>Delete</button>
                                                </div>
                                        </div>
                                    )

                                })
                            }

                        </div>
        </div>
    )
}

export default Event_Comp
