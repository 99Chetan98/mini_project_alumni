import React,{useState} from 'react';
import {NavLink,useHistory} from  'react-router-dom';
import './Admin.css';
import lock from './adImg/loc.jpg';
import lk from './adImg/lk.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Admin = () => {
    const [username,setusername]=useState("");
    const [Pass,setPass]=useState("");
    const history=useHistory();
    const AdminLog=async(e)=>{
        e.preventDefault();
        try{
            const res=await fetch("/Admin_login",{
                method:"POST",
                headers:{
                  'Content-Type':'application/json; charset=utf-8'
                },
                body:JSON.stringify({username,Pass})
            })

            const data=res.json();
            console.log(res.status);
            if(res.status===200){
                toast.success('login successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                window.alert("successfully logined");
                history.push("/AdminPanel");
            }
            else  if(res.status===400){
                toast.error('Inavlid Credentials', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        }catch(e){
            console.log(e);
        }


    }

    return (
        <>
                       <ToastContainer
                          position="top-center"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                      />
        <div className="container-fluid ad-bg">
            
            <div className="ad_box">
            <NavLink to="/" exact><i class="fa fa-home" aria-hidden="true"></i></NavLink>
                <div className="d-flex justify-content-center ad-head">
                    <img src={lock}/>
                    <img src={lk} id="lk"/>
                </div>
                <h3>Admin Login</h3>
      
                <div className="form-box">
                <form action="">
                        <div class="form-group">
                          
                            <input type="email" class="ad-input" placeholder=" email" id="email" value={username} onChange={e=>setusername(e.target.value)} autoComplete="none" required/>
                        </div>
                        <div class="form-group">
                         
                            <input type="password" class="ad-input" placeholder=" password" value={Pass} onChange={e=>setPass(e.target.value)} id="pwd" required/>
                        </div>
                        <div className="d-flex justify-content-center">
                        <button type="submit" class=" btn-primary ad-but" onClick={AdminLog}>Submit</button></div>
                        </form>
                </div>


            </div>
        </div>
    </>
    )
}

export default Admin
