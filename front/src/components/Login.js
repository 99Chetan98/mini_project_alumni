import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Open from "../img/eyno.png";
import Close from "../img/Hide.png";
import {useHistory} from 'react-router-dom';
import '../App.css';
import ScrollTop from './ScrollTop';
import Footer from './Footer';
import Head from './Head';
const Login = () => {
  var open=Open;
  var close=Close;
  const history=useHistory();
  const passwordey="password";
  const text="text";
  const [type,settype]=useState(passwordey);
  const [img,setimg]=useState(open)
  const [temp,settemp]=useState(0);

  const Change=()=>{
    
    
    settemp(temp+1);
    console.log(temp);
    if(temp===0){
      setimg(close);
      settype(text);
    }
    else{
      setimg(open);
      settemp(0);
      settype(passwordey);
    }
  }
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const loginUser=async(e)=>{
      e.preventDefault();
      if(email && password){
                            
              const res=await fetch("/login",{
                method:"POST",
                headers:{
                  'Content-Type':'application/json; charset=utf-8'
                },
                body:JSON.stringify({email,password})

              })
              const data=await res.json();
              console.log(data);

              if(data.msg==="invalid"){
                    toast.error('Inavlid Credentials', {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      });
              }
              else{
                      if(data.msg==="login"){
                        
                        history.push("/UserDash/Profile");
                      }
                      else if(data.msg==="pending"){
                        history.push("/UserDash/Pending");
                      }
                      else{
                        history.push("/UserDash/Declined");
                       }
                // history.push("/UserDash/Profile");
              }

      }
      else{
        toast.error('Please fill all fields', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      }

    }

    return (
      
          <div>
            <ScrollTop/>
            <Head/>
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
          <div className="container d-flex justify-content-center"> 
        <div className="regi_window">
            <div className="row">
              <div className="col-sm-6">
                        <h1>Hello<span> Jnecians</span></h1>
                        <h5>
                        Welcome dear students, It's indeed a pleasure to welcome you to JNEC Alumni Association Portal. JNEC aims at sculpting
                         the versatility of the students along with technical expertise in their own domain.
                        </h5>
              </div>
              <div className="col-sm-6">
                {/* <h3 style="font-family:'Poppins',sans-serif;margin-top: 30px;font-weight: bold;color: rgb(58, 51, 43);margin-left: 10px;">Register</h3> */}
                <form action="/" method="POST">
                  <h2 id="form_text"><i class="fa fa-sign-in" aria-hidden="true"></i> Sign In</h2>
                          <div className="first-div">

                                <div className="form-group">
                                  <label htmlFor="email"><i class="fa fa-envelope" aria-hidden="true"></i> Email</label>
                                  <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter email" name="email"  required/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="pwd"><i class="fa fa-lock" aria-hidden="true"></i> Password</label>
                                  <div className="d-flex">
                                  <input value={password} onChange={(e)=>setpassword(e.target.value)} type={type} className="form-control" id="pwd" placeholder="Enter password" name="password" required/>
                                  <div id="eye"><img src={img} alt="eye" onClick={Change} style={{    height: '38px',top: '30px',position: 'relative',background:'white'}} /></div>
                                  </div>
                                </div>
                                
                          </div>
                          <div className="justify-end">
                                  <h4>Don't have an Account ? <span><NavLink exact to="/Register"> Sign Up</NavLink></span></h4>
                                  <button type="submit" className="btn btn-primary bot" onClick={loginUser}>Submit</button>
                          </div>
                          
                </form>
              </div>
            </div>
        </div>

      </div>
        <Footer/>
        </div>
    )
}

export default Login
