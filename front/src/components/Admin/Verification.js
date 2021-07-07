import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router';
import './Admin.css';
import Admin_nav from './Admin_nav';

const Verification = () => {
    const history=useHistory();
    const [users,setusers]=useState([]);
    const getData=async()=>{
        try{
            const res=await fetch("/registered_data",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    'Content-Type':'application/json'
                    }
            });
            const data=await res.json();
         
            setusers(data);
            if(res.status!=200){
                history.push("/admin");
            }

        }catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        getData();

    }, [])
    const [dis,setdis]=useState();

    const VerifyUser=async(str,id,email)=>{
        try{
                const res=await fetch(`/Verify`,{
                    method:"POST",
                    headers:{
                        Accept:"application/json",
                        'Content-Type':'application/json'
                        },
                    body:JSON.stringify({
                            id,
                            str,
                            email
                    })

                })
                console.log(res.status);
                if(res.status==201){
                    window.alert("access granted");
                    getData();
                }
                else{
                    window.alert("access denied");
                    getData();
                }
               
        }catch(e){
            console.log(e);
        }
        
    }


    return (
        <>
            <Admin_nav/>
            <div className="container-fluid veri-bg">
                <div className="row">
                    {
                            users.map((e,key)=>{
                                if(e.Access==="pending"){
                                    return(
                                        <div className="col-sm-4 d-flex justify-content-center" key={key}>
                                        <div className="veribox">
                                            <h4 className="userName"><i class="fa fa-user-circle" aria-hidden="true"></i> {e.name}</h4>
                                            <h5>Passing Year : {e.passingYear}  |  Assocaition : {e.association}</h5><hr></hr>
                                            <div className="d-flex" style={{justifyContent:"flex-end"}}>
                                                        <button className="btn btn-outline-danger butns" onClick={()=>VerifyUser("decline",e._id,e.email)}>Decline</button>
                                                        <button className="btn btn-success butns" onClick={()=>VerifyUser("verify",e._id,e.email)}>Verify</button>
                                            </div>
                
                
                                        </div>
                
                                        </div>
                                    );
                                }
                            })

                    }




                </div>

            </div>
        </>
    )
}

export default Verification
