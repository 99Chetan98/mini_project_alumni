import Admin_nav from './Admin_nav';
import React,{useState,useEffect} from 'react';
import { useParams ,useHistory} from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Admin.css';

const Edit_Event = () => {
    var history=useHistory();
    const {id}=useParams();
    var [Event,setEvent]=useState([]);
    var [data,setdata]=useState({
        Heading:"",
        Date:"",
        Time:"",
        Dis:"",


    });
    useEffect(async() => {
            try{
                    const res=await fetch(`/indEvent/${id}`,{
                        method:"GET",
                        headers:{
                            Accept:"application/json",
                            'Content-Type':'application/json'
                            }
                    });

                    const data=await res.json();
                   
                    setEvent(data);
                    setdata({
                        Heading:data.heading,
                        Date:data.date,
                        Time:data.time,
                        Dis:data.discription,
                    })
                    
            }catch(e){
                console.log(e);
            }

    }, [])
  

    const HandleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setdata({...data,[name]:value});
    }

    const SubmitEvent=async(e)=>{
        e.preventDefault();
        const {
            Heading,
            Date,
            Time,
            Dis
        }=data;
        if(!Heading && !Date && !Time && !Dis){
            toast.error('Please Fill All Data', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else{
                    try{

                        const res=await fetch("/EventUpdate",{
                            method:"POST",
                            headers:{
                                'Content-Type':'application/json; charset=utf-8',
                                "Access-Control-Allow-Origin": "*",
                            },
                            body:JSON.stringify({
                                Heading,
                                Date,
                                Time,
                                Dis,
                                id
                            })
                        })
                        const da=await res.json();
                        if(da.msg=="posted"){
                            window.alert("event updated");
                            history.push("/All_Event");
                            
                        }
                        else{
                            window.alert("Problem while adding event");
                        }


                    }catch(e){
                        console.log(e);
                    }
            }

    }





    return (
        <div>
            <Admin_nav/>
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
            <div className="container">
                    <div className="EventForm">
                        <span className="d-flex"><h3 id="eventHeading">Edit Event</h3> <button className="btn btn-outline-primary" style={{marginLeft:"15px"}} onClick={()=>history.push("/All_Event")}>Back</button></span>
                        <hr></hr>
                            <form action="" className="eventForm">
                                <div className="row">
                                    <div className="col-sm-6">
                                         <div className="form-group">
                                             <label for="uname">Event Heading</label>
                                            <input type="text" className="form-control" value={data.Heading} onChange={HandleChange} style={{background:"white"}} id="uname" placeholder="Enter heading" name="Heading" required/>
                                         </div>
                                    </div>
                                    <div className="col-sm-3">
                                         <div className="form-group">
                                             <label for="uname">Date</label>
                                            <input type="date" className="form-control" value={data.Date} onChange={HandleChange}  style={{background:"white"}} id="uname" placeholder="Enter Date" name="Date" required/>
                                         </div>

                                    </div>

                                    <div className="col-sm-3">
                                         <div className="form-group">
                                             <label for="uname">Time</label>
                                            <input type="time" className="form-control" value={data.Time} onChange={HandleChange}  style={{background:"white"}} id="uname" placeholder="Enter Time" name="Time" required/>
                                         </div>

                                    </div>
                                    <div className="col-sm-12">
                                         <div className="form-group">
                                             <label for="uname">Event Discription</label>
                                            <textarea className="form-control" value={data.Dis} onChange={HandleChange}   rows="10" cols="50" style={{background:"white"}} id="uname" placeholder="Enter Discription" name="Dis" required/>
                                         </div>

                                    </div>


                                </div>
                               <div className="d-flex justify-content-center"><button className="btn btn-primary eventbut" onClick={SubmitEvent}>Update</button></div>
                            </form>
                    </div>
            </div>
            
        </div>
    )
}

export default Edit_Event
