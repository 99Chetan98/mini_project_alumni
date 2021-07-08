import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import Head from './Head'
import '../App.css';
import Footer from './Footer';

const All_newsroom = () => {
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
            <Head/>
            <div className="container eventcomp" style={{top:"60px",marginBottom:"100px"}}>
                <h2>All News</h2>
                <hr></hr>

                {
                    News.map((e)=>{

                        return(
                            <div className="EventBox" style={{borderRadius:"0px",marginBottom:"50px"}}>
                                    <h3 onClick={()=>history.push(`/News/${e._id}`)}><i class="fa fa-newspaper-o" aria-hidden="true"></i> {e.heading}</h3>
                                    <h6 >{e.date}</h6>
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

export default All_newsroom
