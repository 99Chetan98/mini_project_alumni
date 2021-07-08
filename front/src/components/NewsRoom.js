import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';


const NewsRoom = () => {
    const [news,setnews]=useState([]);
    var his=useHistory();
    
    useEffect(async() => {
            try{
                    const res=await fetch("/GetNews",{
                        method:"GET",
                        headers:{
                            Accept:"application/json",
                            'Content-Type':'application/json'
                            }
                    });

                    const data=await res.json();
                   
                    setnews(data);
                    
            }catch(e){
                console.log(e);
            }

    }, [])
 
    var temp=0;
    return (

        <div>
                 <div className="Nbox">
                          <h1>News Room</h1>

                                
                                {

                                    news.map((e)=>{
                                        temp=temp+1
                                        if(temp<=3){
                                            return(
                                                <>
                                                <div className="newsbox" onClick={()=>his.push(`/News/${e._id}`)}>
                                                    <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                                        <h1>{e.heading}
                                                            <h5>{e.date}</h5>
                                                            <h4 id="news-dis">{e.discription}</h4>
                                                        </h1>
                                                 </div>
                                                 <hr  style={{margin:"0px"}}></hr>
                                                 </>
                                                 
                                            )
                                        }

                                    })
                                }



                                <h3 style={{textAlign:"end",paddingRight:"30px"}} onClick={()=>his.push("/All_NewsRooms")}>Read more</h3>
                                
                </div>
        </div>
    )
}

export default NewsRoom
