import React,{useState,useEffect} from 'react';
import { useHistory,NavLink } from 'react-router-dom';
import Header from './NavHeader';

const UserNews = () => {
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
    return (
        <div>
            <Header/>
           <div className="container" style={{width:"60%",position:"relative",top:"90px"}}>
           {
                    News.map((e)=>{

                        return(
                            <div className="EventBox">
                                    <h3 style={{fontSize:"20px"}} onClick={()=>history.push(`/News/${e._id}`)}><i class="fa fa-newspaper-o" aria-hidden="true"></i> {e.heading}</h3>
                                    <h6 >{e.date}</h6>
                                    <hr></hr>
                                    <h4  id="news-dis">{e.discription}</h4>

                            </div>
                        )

                    })
                }
                </div>
                            <div className="ulbox">
                                <ul>
                                <NavLink to="/UserDash" activeClassName="getact"> <li>Upcoming Events</li></NavLink> 
                                <hr style={{margin:"0px"}}></hr>
                                <NavLink to="/UserDash/PastEvents" activeClassName="getact"> <li>Past Events</li></NavLink> 
                                    <hr style={{margin:"0px"}}></hr>
                                    <NavLink to="/UserDash/News" activeClassName="getact"><li  className="activo">News</li></NavLink>
                                    
                                   
                                </ul>
                        </div>
        </div>
    )
}

export default UserNews
