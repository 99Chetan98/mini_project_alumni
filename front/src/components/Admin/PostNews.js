import React,{useState} from 'react';
import './Admin.css';
import Admin_nav from './Admin_nav';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';

const PostNews = () => {
    const history=useHistory();
    const [data,setdata]=useState({
        Heading:"",
        Date:"",
      
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
          
            Dis
        }=data;
        if(!Heading && !Date && !Dis){
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

                        const res=await fetch("/PostNews",{
                            method:"POST",
                            headers:{
                                'Content-Type':'application/json; charset=utf-8',
                                "Access-Control-Allow-Origin": "*",
                            },
                            body:JSON.stringify({
                                Heading,
                                Dis
                            })
                        })
                        const da=await res.json();
                        if(da.msg=="posted"){
                            window.alert("event added");
                            setdata({
                                Heading:"",
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
                        <div className="d-flex"><h3 id="eventHeading">Post News</h3> <button className="btn btn-outline-primary" style={{marginLeft:"15px"}} onClick={()=>history.push("/All_News")}>Veiw all</button></div>
                        <hr></hr>
                            <form action="" className="eventForm">
                                <div className="row">
                                    <div className="col-sm-12">
                                         <div className="form-group">
                                             <label for="uname">News Heading</label>
                                            <input type="text" className="form-control" value={data.Heading} onChange={HandleChange} style={{background:"white"}} id="uname" placeholder="Enter heading" name="Heading" required/>
                                         </div>
                                    </div>

                                    <div className="col-sm-12">
                                         <div className="form-group">
                                             <label for="uname">Discription</label>
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

export default PostNews
