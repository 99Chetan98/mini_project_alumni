import React,{useState} from 'react';
import Head from './Head'
import '../App.css';
// const [state, setstate] = useState(initialState)

const Regi = () => {
    
    const lef="0rem";
    const [temp, settemp] = useState(0);
    const [left, setleft] = useState(lef);
    const Change=()=>{
        console.log("changed");
        if(temp===0){
            const lefo="-31rem";
            setleft(lefo);
            console.log("true");
        }
        else if(temp===1){
            const lefo="-66rem";
            setleft(lefo);
            console.log("true");
        }
        else if(temp===2){
            const lefo="-100rem";
            setleft(lefo);
            console.log("true");
        }
        else if(temp===3){
            const lefo="-135rem";
            setleft(lefo);
            console.log("true");
        }
        else{
            console.log("truflasee");
        }
        

        // console.log(temp);
        settemp(temp+1)
    }

    const Prev=()=>{
        
        if(temp===0){
            const ret="0rem"
            setleft(ret);
            settemp(0);
        }
        else if(temp===1){
            const ret="-31rem"
            setleft(ret);
            settemp(0);
        }
        else if(temp===2){
            const ret="-66rem"
            setleft(ret);
            settemp(1);
        }
        else if(temp===3){
            const ret="-100rem"
            setleft(ret);
            settemp(1);
        }
        else{
            const ret="-100rem"
            setleft(ret);
            settemp(2);
        }

    }

    return (
        <>
        <Head/>
          <div className="container d-flex justify-content-center"> 
        <div className="regi_window2">
            <div className="row">
              <div className="col-sm-6">
              <form action="/">
                  <h2 id="form_text2">Sign Up</h2>


                        <div className="scrollX">

                          <div className="first-div" style={{left:left,position:"relative",transition:"0.3s ease-in-out"}}>
                                <div className="form-group">
                                  <label htmlFor="Name"> Name</label>
                                  <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" required/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="email"> Email</label>
                                  <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email"/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="number"> Mobile No.</label>
                                  <input type="text" className="form-control" id="phone" maxLength="10" placeholder="Enter Mobile No." name="phone"/>
                                </div>
                                <label htmlFor="gender" style={{margin:"10px 13px 0px 0px"}}> Gender :</label>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="genderm" name="gender" value="male"/>
                                    <label className="custom-control-label" htmlFor="genderm">Male</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="genderf" name="gender" value="female"/>
                                    <label className="custom-control-label" htmlFor="genderf">Female</label>
                                </div>
                                
                          </div>

                          <div className="second-div" style={{left:left,transition:"0.3s ease-in-out"}}>
                          
                                <div className="form-group">
                                <label htmlFor="Awj"> Association with JNEC</label>
                                  <select name="Association with JNEC" className="custom-select form-control" required>
                                    <option value="" selected="selected">Select</option>
                                    <option value="Employee">Graduation</option>
                                    <option value="Employer">Post Graduation</option>
                                    <option value="Research Scholar">Research Scholar</option>
                                    
                                </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="depart"> Select Department</label>
                                    <select name="dept" class="form-control" required="">
                                    <option value="" selected="selected">Branch</option>
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
                                <div className="form-group">
                                  <label htmlFor="year"> Select Passing Year</label>
                                  <select name="passingyear" class="form-control" required="">
                                      <option value="" selected="selected">Year</option>
                                      
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

                          <div className="third-div" style={{left:left,transition:"0.3s ease-in-out"}}>
                                <div className="form-group">
                                  <label htmlFor="Name">Organization currently working with</label>
                                  <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="email"> Working in Capacity </label>
                                  <select name="designation" class="form-control" required="">
                                      <option value="" selected="selected">Select</option>
                                      <option value="Employee">Employee</option>
                                      <option value="Employer">Employer</option>
                                      <option value="Entrepreneur">Entrepreneur</option>
                                      <option value="Other">Other</option>
                                  </select>
                                 </div>
                                <div className="form-group">
                                  <label htmlFor="email"> Area of Expertise </label>
                                  <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email"/>
                                </div>

                                
                          </div>

                          <div className="fourth-div" style={{left:left,transition:"0.3s ease-in-out"}}>
                                <div className="form-group">
                                  <label htmlFor="Name"> Name</label>
                                  <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="email"> Email</label>
                                  <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email"/>
                                </div>

                                
                          </div>
                          <div className="fifth-div" style={{left:left,transition:"0.3s ease-in-out"}}>
                                <div className="form-group">
                                  <label htmlFor="Name"> Name</label>
                                  <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="email"> Email</label>
                                  <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email"/>
                                </div>

                                
                          </div>

                    </div>


                          <div className="justify-end">
                                <button type="button" className="btn btn-secondary prev" onClick={Prev}>Previous</button>
                                <button type="button" className="btn btn-primary next" onClick={Change}>Next</button>
                          </div>
                </form>
              </div>
              <div className="col-sm-6">

              </div>
            </div>
        </div>

      </div>
        </>
    )
}

export default Regi
