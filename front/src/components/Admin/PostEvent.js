import React,{useState} from 'react';
import './Admin.css';
import Admin_nav from './Admin_nav';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostEvent = () => {
    var history=useHistory();
    const [data,setdata]=useState({
        Heading:"",
        Date:"",
        Time:"",
        Dis:""


    });
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

                        const res=await fetch("/PostEvent",{
                            method:"POST",
                            headers:{
                                'Content-Type':'application/json; charset=utf-8',
                                "Access-Control-Allow-Origin": "*",
                            },
                            body:JSON.stringify({
                                Heading,
                                Date,
                                Time,
                                Dis
                            })
                        })
                        const da=await res.json();
                        if(da.msg=="posted"){
                            window.alert("event added");
                            setdata({
                                Heading:"",
                                Date:"",
                                Time:"",
                                Dis:""
                            });
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
        <>

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
                        <span className="d-flex"><h3 id="eventHeading">Post Event</h3> <button className="btn btn-outline-primary" style={{marginLeft:"15px"}} onClick={()=>history.push("/All_Event")}>Veiw all</button></span>
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
                                             <label for="uname">Event Description</label>
                                            <textarea className="form-control" value={data.Dis} onChange={HandleChange}   rows="10" cols="50" style={{background:"white"}} id="uname" placeholder="Enter Discription" name="Dis" required/>
                                         </div>

                                    </div>


                                </div>
                               <div className="d-flex justify-content-center"><button className="btn btn-primary eventbut" onClick={SubmitEvent}>Submit</button></div>
                            </form>
                    </div>
            </div>
        </>
    )
}

export default PostEvent
