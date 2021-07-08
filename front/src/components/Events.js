
import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
const Events = () => {
    const his=useHistory();
    const [Event,setEvent]=useState([]);
    useEffect(async() => {
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
  
    var temp=0;
    return (
        <div>
                <div className="ebox">
                        <h1>Events</h1>
                                {
                                    Event.map((e)=>{
                                        temp=temp+1;
                                        const str=e.date;
                                        var arr=str.split("-");
                                        if(temp<=3){
                                        return(
                                            <>
                                            <div class="efield" onClick={()=>his.push(`/EventInformation/${e._id}`)}>
                                            <h2>{arr[2]} <span>{year[arr[1]]}</span></h2>
                                                <span style={{display:"grid"}}>
                                                        <h2 id="texte">{e.heading}</h2>
                                                        <h6>Date: {arr[2]} {year[arr[1]]} {arr[0]} | Time: {e.time}</h6>
                                                        <h4  id="news-dis">{e.discription}
                                                        </h4>
                                                </span>
                                            </div>
                                            <hr  style={{margin:"0px"}}></hr>
                                            </>
                                        );
                                        }
                                    })
                                }



                       
                                   
                         <h5 style={{textAlign:"right" ,paddingRight:"20px",paddingBottom:"10px"}} onClick={()=>his.push("AllEvents")}>More Events</h5>
                </div>
        </div>
    )
}

export default Events
