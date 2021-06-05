import React , {useEffect,useState,useRef} from 'react';
import Header from './NavHeader';
import {useHistory} from 'react-router-dom';
import './style.css';
import img from '../../img/default.jpeg';
import Loader from './Loader';
;

function EditProfile(props) {
    const history=useHistory();
    const [userdata,setuserdata]=useState({
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
  
    })
    const checklogged=async()=>{
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
        checklogged();
    }, []);


    const handleInput=(e)=>{
            const name=e.target.name;
            const value=e.target.value;
            setuserdata({...userdata,[name]:value});
    }

const  Submitform=(e)=>{
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
        areaofexpert

    }=userdata;

    fetch("/Update_data",{
        method:"POST",
        headers:{
          'Content-Type':'application/json; charset=utf-8',
          "Access-Control-Allow-Origin": "*",
          'Accept': 'application/json'
        },
        body:JSON.stringify({
            id:userdata._id,
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

        })
      }).then(res=>{
          res.json();
          
          if(res.status===201){
            window.alert("Updated Succesfully");
              history.push("/UserDash/profile");
          }
          else{
            window.alert("Their is error while updating your data");
          }
      }).catch(e=>{
          console.log(e)
      })



}

    return (
    
        <>
            <Header/>
          
            <Loader timing={200}/>
            <div className="container regi_box">
            <form method="POST">
                      <h5 id="heading" data-toggle="collapse" data-target="#deemo"><i class="fa fa-user" aria-hidden="true"></i> Personal Details</h5>
                      <div id="demo" class="colllapse in">
                        <div className="row">
                         
                              <div className="col-sm-6">
                                  <div className="form-group">
                                      <label htmlFor="Name"> Name</label>
                                      <input value={userdata.name}type="text" className="form-control"   id="name" placeholder="Enter Name" style={{textTransform:"capitalize"}} onChange={handleInput} name="name" required/>
                                    </div>
                              </div>
                              <div className="col-sm-6">
                                  <div className="form-group">
                                      <label htmlFor="email">E-mail</label>
                                      <input value={userdata.email}type="email" className="form-control"   id="email" placeholder="Enter Email" onChange={handleInput} name="email" required/>
                                    </div>
                              </div>
                        </div>
                       
                       
                        <div className="row">
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <label htmlFor="phone">Phone No.</label>
                                      <input value={userdata.phone}type="text" className="form-control"  id="phone" placeholder="Enter Whatsapp no." onChange={handleInput} name="phone" maxLength="10" required/>
                                    </div>
                              </div>
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <label htmlFor="date">Date of Birth</label>
                                      <input value={userdata.dob}type="date" className="form-control"  id="dob" placeholder="Enter Birthday" onChange={handleInput} name="dob" required/>
                                    </div>
                              </div>
                              <div className="col-sm-4">
                                  <div className="form-group">
                                      <label htmlFor="gender">Gender</label>
                                      <select onChange={handleInput} name="gender" className="form-control"  required>
                                      <option value={userdata.gender} defaultValue="selected">{userdata.gender}</option>
                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                    </div>
                              </div>
                              <div className="col-sm-12">
                                  <div className="form-group">
                                      <label htmlFor="date">Postal Address</label>
                                      <textarea className="form-control"   id="add" placeholder="Enter Address" style={{textTransform:"capitalize"}} onChange={handleInput} name="add" value={userdata.add} required/>
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
                                      <select onChange={handleInput} name="association" className="form-control" required>
                                          <option value={userdata.association} defaultValue="selected">{userdata.association}</option>
                                          <option value="Graduation">Graduation</option>
                                          <option value="Post Graduation">Post Graduation</option>
                                          <option value="Research Scholar">Research Scholar</option>
                                          
                                      </select>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="form-group">
                                      <label htmlFor="date">Select Department</label>
                                      <select onChange={handleInput} name="dept" className="form-control" required>
                                          <option value={userdata.dept} defaultValue="selected">{userdata.dept}</option>
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
                                      <select onChange={handleInput} name="passingYear" className="form-control" required>
                                          <option value={userdata.passingYear} defaultValue="selected">{userdata.passingYear}</option>
                                          
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
                                    <input className="form-control" value={userdata.organisation}type="text" onChange={handleInput} name="organisation" placeholder="Without any punctuation/special characters" title="Avoid special symbol/punctuation" pattern="[a-zA-Z0-9 ]+" required/>
                                 </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="form-group">
                                    <label htmlFor="date">Working as</label>
                                    <select onChange={handleInput} name="designation" className="form-control" required>
                                        <option value={userdata.designation} defaultValue="selected">{userdata.designation}</option>
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
                                      <input className="form-control"  value={userdata.areaofexpert}type="text" onChange={handleInput} name="areaofexpert" placeholder="Enter your area of Expertise/Interest" required/>
                                    </div>
                              </div>
                          </div>
                               <hr></hr>

                               </div>
                             
                               <div className="d-flex justify-content-center align-center">

                                 <button className="btn btn-primary bot" type="submit" onClick={Submitform} name="submit">Submit</button>
                               </div>
                      </form>
            </div>
           
        </>
    )
}

export default EditProfile
