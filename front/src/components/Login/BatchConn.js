import React from 'react';
import Header from './NavHeader';
import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import img from '../../img/top.jpg';
const BatchConn = () => {
    const [userdata,setuserdata]=useState([]);
    const [condata,setcondata]=useState([]);
    const history=useHistory();
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

    const find=()=>{
            console.log("finding");
    }




    useEffect(() => {
            finbatch();
    },[])

console.log(userdata)

        useEffect(() => {
            fetch("/find_batchmate",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json; charset=utf-8',
                    "Access-Control-Allow-Origin": "*",
                  },
                  body:JSON.stringify(
                    {
                        year:userdata.passingYear
                    }
                  )
            }).then(res=>res.json())
            .then(results=>{
                setcondata(results.user);
                
                
            }).catch(()=>{
                
            })




        },[userdata])
        console.log(condata)
    return (
        <div>
                    <Header/>
                <div className="container-fluid find">
                    <div className="row">
                        {
                            condata.map((e,key)=>{
                                if(e.name!=userdata.name){
                                    return(

                                        <div key={key}className="col-sm-2">
                                       <div className="d-flex justify-content-center"> <img src={img} style={{height:"100px",width:"100px"}}/></div>
                                        <h4>{e.name}</h4>
                                        <h6>{e.dept}</h6>
                                        <div className="d-flex justify-content-center"><button type="button" className="btn btn-primary ">Connect</button></div>
                                         </div>
                                    )}
                            })
                        }


                    </div>

                </div>
        </div>
    )
}

export default BatchConn
