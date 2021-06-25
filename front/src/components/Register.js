import React,{useState } from 'react';
import Open from "../img/eyno.png";
import Close from "../img/Hide.png";
import { useHistory} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from './Head';
import '../App.css';
import Footer from './Footer';

const Register = () => {
  var open=Open;
  var close=Close;
  const password="password";
  const text="text";
  const history=useHistory();
  const [type,settype]=useState(password);
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
      settype(password);
    }
  }
  
    let name,value;
    
    const [User,setUser]=useState({
                name:"",
                email:"",
                phone:"",
                dob:"",
                gender:"",
                add:"",
                association:"",
                dept:"",
                passingYear:"",
                organisation:"",
                designation:"",
                areaofexpert:"",
                password:"",
                confirmpass:""
    });




    const handleInput=(e)=>{

      console.log(e);
      name=e.target.name;
      value=e.target.value;
      setUser({...User,[name]:value})
    }
const postData=async(e)=>{
  e.preventDefault();
            const {name,
              email,
              phone,
              dob,
              gender,
              add,
              association,
              dept,
              passingYear,
              organisation,
              designation,
              areaofexpert,
              password,
              confirmpass
          }=User;
          if(password===confirmpass){

            const res=await fetch("/send_data",{
              method:"POST",
              headers:{
                'Content-Type':'application/json; charset=utf-8',
                "Access-Control-Allow-Origin": "*",
              },
              body:JSON.stringify({
                          name,
                          email,
                          phone,
                          dob,
                          gender,
                          add,
                          association,
                          dept,
                          passingYear,
                          organisation,
                          designation,
                          areaofexpert,
                          password,
                          confirmpass
              })
            });
            const data=await res.json();
            if(data.status===422){
              window.alert("invalid");
            }else{
              window.alert("Succesfully Register");
             history.push("/Login");
            }



          }
          else{
            toast.error('Password Not Matched', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          }
   
}

    return (
        <>       <Head/>
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
            <div className="container-fluid d-flex justify-content-center align-center rgtr_wid" id="top">
                    <div className="regi_box panel-group"  id="accordion">
                      <h2 style={{textAlign:"center",background:'#f4d8b16e',padding:"20px 0px",fontFamily:"Poppins",color:"#6e4205"}}>Registration</h2>
                      
                      <form method="POST" onSubmit={postData}>
                      <h5 id="heading" data-toggle="collapse" data-target="#demo"><i class="fa fa-user" aria-hidden="true"></i> Personal Details</h5>
                      <div id="demo" class="collapse">
                        <div className="row">
                         
                              <div className="col-sm-6">
                                  <div className="form-group">
                                      <label htmlFor="Name"> Name</label>
                                      <input type="text" className="form-control" value={User.name} onChange={handleInput}  id="name" placeholder="Enter Name" style={{textTransform:"capitalize"}} name="name" required/>
                                    </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="form-group">
                                      <label htmlFor="email">E-mail</label>
                                      <input type="email" className="form-control" value={User.email} onChange={handleInput}  id="email" placeholder="Enter Email" name="email" required/>
                                    </div>
                              </div>
                        </div>
                       
                       
                        <div className="row">
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <label htmlFor="phone">Phone No.</label>
                                      <input type="text" className="form-control" value={User.phone} onChange={handleInput}  id="phone" placeholder="Enter Whatsapp no." name="phone" maxLength="10" required/>
                                    </div>
                              </div>
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <label htmlFor="date">Date of Birth</label>
                                      <input type="date" className="form-control" value={User.dob} onChange={handleInput}  id="dob" placeholder="Enter Birthday" name="dob" required/>
                                    </div>
                              </div>
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <label htmlFor="gender">Gender</label>
                                      <select name="gender" className="form-control" value={User.gender} onChange={handleInput}  required>
                                      <option value="" defaultValue="selected">Gender</option>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                    </div>
                              </div>
                              <div className="col-sm-12">
                                  <div className="form-group">
                                      <label htmlFor="date">Postal Address</label>
                                      <textarea className="form-control" value={User.add} onChange={handleInput}  id="add" placeholder="Enter Address" style={{textTransform:"capitalize"}} name="add" required/>
                                    </div>
                              </div>
                            
                        </div>
                      </div>
                        <h5 id="heading"  data-toggle="collapse" data-target="#div2"><i class="fa fa-university" aria-hidden="true"></i> College Association Details</h5>
                        <div className="collapse" id="div2">
                        <div className="row ">
                          <div className="col-sm-4">
                              <div className="form-group">
                                      <label htmlFor="assocaition">Association with JNEC</label>
                                      <select name="association" className="form-control" value={User.association} onChange={handleInput}  required>
                                          <option value="" defaultValue="selected">Select</option>
                                          <option value="Graduation">Graduation</option>
                                          <option value="Post Graduation">Post Graduation</option>
                                          <option value="Research Scholar">Research Scholar</option>
                                          
                                      </select>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="form-group">
                                      <label htmlFor="date">Select Department</label>
                                      <select name="dept" className="form-control" value={User.dept} onChange={handleInput}  required>
                                          <option value="" defaultValue="selected">Branch</option>
                                          <option value="cse">Architecture</option>
                                          <option value="cse">CSE</option>
                                          <option value="mech">MECH</option>
                                          <option value="prod">PRODUCTION</option>
                                          <option value="entc">ENTC</option>
                                          <option value="eep">EEP</option>
                                          <option value="chem">CHEM</option>
                                          <option value="ie">IE</option>    
                                          <option value="mca">MCA</option>
                                          <option value="it">IT</option>                  
                                          <option value="civil">CIVIL</option>
                                          <option value="instru">INSTRU</option>
                                          <option value="instru">Bio-Tech</option>


                                        </select>
                                        </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="form-group">
                                      <label htmlFor="date">Select Passing Year</label>
                                      <select name="passingYear" className="form-control" value={User.passingYear} onChange={handleInput}  required>
                                          <option value="" defaultValue="selected">Year</option>
                                          
                                          <option value="1987">1987</option>
                                          <option value="1988">1988</option>
                                          <option value="1989">1989</option>
                                          <option value="1990">1990</option>
                                          <option value="1991">1991</option>
                                          <option value="1992">1992</option>
                                          <option value="1993">1993</option>
                                          <option value="1994">1994</option>
                                          <option value="1995">1995</option>
                                          <option value="1996">1996</option>
                                          <option value="1997">1997</option>
                                          <option value="1998">1998</option>
                                          <option value="1999">1999</option>
                                          <option value="2000">2000</option>
                                          <option value="2001">2001</option>
                                          <option value="2002">2002</option>
                                          <option value="2003">2003</option>
                                          <option value="2004">2004</option>
                                          <option value="2005">2005</option>
                                          <option value="2006">2006</option>
                                          <option value="2007">2007</option>
                                          <option value="2008">2008</option>
                                          <option value="2009">2009</option>
                                          <option value="2010">2010</option>
                                          <option value="2011">2011</option>
                                          <option value="2012">2012</option>
                                          <option value="2013">2013</option>
                                          <option value="2014">2014</option>
                                          <option value="2015">2015</option>
                                          <option value="2016">2016</option>
                                          <option value="2017">2017</option>
                                          <option value="2018">2018</option>
                                          <option value="2019">2019</option>                        
                                            <option value="2020">2020</option>   
                                           <option value="2021">2021</option>                     
                                   </select>
                              </div>
                          </div>
                          
                          </div>
                       
                        </div>
                        <h5 id="heading"  data-toggle="collapse" data-target="#div3"><i class="fa fa-building" aria-hidden="true"></i> Organisational Details</h5>
                          <div className="collapse" id="div3">
                          <div className="row">
                              <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="organisation">Organisation currently working with</label>
                                    <input className="form-control" value={User.organisation} onChange={handleInput}  type="text" name="organisation" placeholder="Without any punctuation/special characters" title="Avoid special symbol/punctuation" pattern="[a-zA-Z0-9 ]+" required/>
                                 </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="form-group">
                                    <label htmlFor="date">Working as</label>
                                    <select name="designation" className="form-control" value={User.designation} onChange={handleInput}  required>
                                        <option value="" defaultValue="selected">Select</option>
                                        <option value="Employee">Employee</option>
                                        <option value="Employer">Employer</option>
                                        <option value="Entrepreneur">Entrepreneur</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                              </div>
                              <div className="col-sm-3">
                                  <div className="form-group">
                                      <label htmlFor="Name">Job Profile</label>
                                      <input className="form-control" value={User.areaofexpert} onChange={handleInput}  type="text" name="areaofexpert" placeholder="Enter your area of Expertise/Interest" required/>
                                    </div>
                              </div>
                          </div>
                               <hr></hr>
                               <div className="row d-flex justify-content-center align-center">
                               <div className="col-sm-4">
                               
                               <div className="form-group">
                                      <label htmlFor="Name">Password</label>
                                      <div className="d-flex"><input type={type} className="form-control pass" value={User.password} onChange={handleInput} name="password" placeholder="Enter Password" autoComplete="false" required/>
                                   </div>
                                    </div>
                                    

                               </div>
                               <div className="col-sm-4">
                               <div className="form-group">
                                      <label htmlFor="Name">Confirm Password</label>
                                      <input type="password" className="form-control" value={User.confirmpass} onChange={handleInput}  name="confirmpass" placeholder="Enter Password" autoComplete="false" required/>
                                      
                                    </div>

                               </div>
                               </div>
                               </div>
                             
                               <div className="d-flex justify-content-center align-center">

                                 <button className="btn btn-primary bot" type="submit" name="submit">Submit</button>
                               </div>
                      </form>
                    </div>

            </div>
            <Footer/>
        </>
    )
}

export default Register
