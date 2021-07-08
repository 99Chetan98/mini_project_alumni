
import Admin_nav from './Admin_nav';
import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import './Admin.css';
const All_News = () => {
    var history=useHistory();
    const [News,setNews]=useState([]);
    const fetchNews=async()=>{
        try{
            const res=await fetch("/GetNews",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    'Content-Type':'application/json'
                    }
            });

            const data=await res.json();
           
            setNews(data);
            
    }catch(e){
        console.log(e);
    }
    }
    useEffect(async() => {
        fetchNews();

    }, [])
    const Delete=async(id)=>{
        var sta=window.confirm("are sure you want to delete this data");
        if(sta){
            try{
    
                const res=await fetch("/deleteNews",{
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
                     window.alert("News Deleted");
                     fetchNews();;
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
                    News.map((e)=>{

                        return(
                            <div className="EventBox">
                                    <h3 onClick={()=>history.push(`/View_News/${e._id}`)}><i class="fa fa-newspaper-o" aria-hidden="true"></i> {e.heading}</h3>
                                    <h6 >{e.date}</h6>
                                    <hr></hr>
                                    <h4  id="news-dis">{e.discription}</h4>
                                    <div style={{display:"flex",justifyContent:"flex-end",marginTop:"15px"}}>
                                            <button className="btn btn-primary" onClick={()=>history.push(`/Edit_News/${e._id}`)}>Edit</button>
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

export default All_News
