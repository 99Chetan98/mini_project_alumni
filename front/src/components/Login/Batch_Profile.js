import React from 'react';
import Header from './NavHeader';
import {useEffect,useState} from 'react';
import {useHistory,useLocation} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import img from '../../img/top.jpg';
import { compareSync } from 'bcryptjs';
import Loader from './Loader';
const Batch_Profile = () => {

    const [sta,setsta]=useState("");
    const [userdata,setuserdata]=useState([]);
    const finbatch=async()=>{
        try{
            const res=await fetch("/userlog",{
                method:"GET",
               
                headers:{
                Accept:"application/json",
                'Content-Type':'application/json'
                },
               
            });
            const data=await res.json();
            setuserdata(data);         
        }catch(e){
            console.log(e);
            history.push('/Login');
        }
        
    }

    useEffect(() => {
            finbatch();

    },[])


  const [user, setuser] = useState([]);
  const [rstat, setrstat] = useState();

  const fun=()=>{
 

            for(var i in userdata.conreq){
                
                if(userdata.conreq[i].reqc===user._id || userdata.conreq[i].reqc===name){
                    var butstat=userdata.conreq[i].status;
                    console.log(butstat)
                    if(butstat===0){
                        setrstat("Pending")
                    }
                    else if(butstat===1){
                        setrstat("Accept")
                    }
                    else if(butstat===2){
                        setrstat("View Full profile")
                    }
                }
            }
     


}
useEffect(() => {
   
    fun();
    return()=>{
        setrstat("Connect")
    }
  
})
console.log(rstat)
    const history=useHistory();
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('uid');
  const stat = new URLSearchParams(search).get('status');

    useEffect(async() => {
 
        try{
            const res=await fetch(`/find/${name}/${stat}`,{
                method:"GET",
               
                headers:{
                Accept:"application/json",
                'Content-Type':'application/json'
                }
               
            });
            const data=await res.json();
            setuser(data);


                   
        }catch(e){
            console.log(e);
            history.push('/Login');
        }
     


   
        if(stat===1){
            setsta({text:"Pending"});
        }





    },[name,stat]);
    

const [tr,settr]=useState("");

    const beMate=(sta)=>{
        settr("true")
        if(sta==="Accept"){
            fetch(`/bemates`,{
                method:"POST",
                headers:{
                  'Content-Type':'application/json; charset=utf-8',
                  "Access-Control-Allow-Origin": "*",
                },
                body:JSON.stringify(
                  {
                     user:userdata._id,
                     mateid:name
                  })
            }).then((res)=>{
                console.log(res.json);
            }).catch(e=>{
                console.log(e);
            })
        }
        else if(sta==="Connect"){
            fetch(`/put_con/${userdata._id}`,{
                method:"POST",
                headers:{
                  'Content-Type':'application/json; charset=utf-8',
                  "Access-Control-Allow-Origin": "*",
                },
                body:JSON.stringify(
                  {
                     id:name
                  })
            }).then((res)=>{
                console.log(res.json);
            }).catch(e=>{
                console.log(e);
            })
        }
        else if(sta==="View Full profile"){
           history.push(`/UserDash/Mate_profile?user_req=${name}`)
        }
    }
    
  console.log(sta);


      
    return (
        <div>
                    <Header/>
                    <Loader timing={800}/>
                     <div className="container">
                <div className="profileBox">  
                   

                    
                    <div className="container">
                    <div className="row ">
                    <div className="col-md-6 col-sm-4 ">
                    <div className="d-flex justify-content-center " style={{top:"-50px",position:"relative"}}> 
                    <img src={img} alt="" id="profile_pic"/>
                    
                    </div>  
                    
                    <h1>{user.name}</h1>
                        </div>
                        <div className="col-md-3 col-sm-4" style={{marginTop:"60px",paddingLeft:"40px"}}>
                            <h6>Organisation</h6>
                             <h5> {user.organisation}</h5>  
                             <h6>Specialisation</h6>
                             <h5> {user.areaofexpert}</h5>  

                        </div>
                     <div className="col-md-3 col-sm-4 " style={{marginTop:"60px",paddingLeft:"40px"}}>

                             <h6>Department</h6>
                             <h5> {user.dept}</h5>  
                             <h6>Passing Year</h6>
                             <h5> {user.passingYear}</h5>
                        </div>
                    </div>
                    
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-center" id={rstat}><button type="button" className="btn btn-primary conset" onClick={()=>beMate(rstat)} style={{marginBottom:"10px"}} disabled={tr}>{rstat}</button></div>
                </div>

            </div>
               
        </div>
    )
}

export default Batch_Profile
