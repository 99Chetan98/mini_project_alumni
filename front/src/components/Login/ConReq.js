import React from 'react'
import Header from './NavHeader';
import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import img from '../../img/default.jpeg';
const ConReq = (props) => {
    const history=useHistory();
    const [user, setuser] = useState([]);
    const [userdata,setuserdata]=useState([]);
    const [Ope,setOpe]=useState({
        text:"",
        dis:""
    })
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

    
    useEffect(async() => {
        if(props.opid==1){
            setOpe({
                text:"pending",
                dis:"true"
            })
    }
    else if(props.opid==0){
        setOpe({
            text:"Accept",
            dis:""
        })
    }
        try{
            const res=await fetch(`/find/${props.id}`,{
                method:"GET",
               
                headers:{
                Accept:"application/json",
                'Content-Type':'application/json'
                },
               
            });
            const data=await res.json();
            setuser(data);

                   
        }catch(e){
            console.log(e);
           
        }
    },[]);
    console.log(userdata)
    const Bemate=(id,uid)=>{
        if(id==0){
            fetch(`/bemates`,{
                method:"POST",
                headers:{
                  'Content-Type':'application/json; charset=utf-8',
                  "Access-Control-Allow-Origin": "*",
                },
                body:JSON.stringify(
                  {
                     user:userdata._id,
                     mateid:uid
                  })
            }).then((res)=>{
                console.log(res.json);
            }).catch(e=>{
                console.log(e);
            })
        }
        
    }
    
    return (
        <div>
               

                
                                       <div className="d-flex justify-content-center"> <img src={img} style={{height:"100px",width:"100px"}}/></div>
                                        <h4 onClick={()=>{ history.push(`/UserDash/Batch_Profile?uid=${user._id}`);}}>{user.name}</h4>
                                        <h6>{user.dept} | {user.passingYear}</h6>
                                        <div className="d-flex justify-content-center"><button type="button" className="btn btn-primary" onClick={()=>Bemate(props.opid,user._id)} disabled={Ope.dis}>{Ope.text}</button></div>
                                       
</div>

      
    )
}

export default ConReq
