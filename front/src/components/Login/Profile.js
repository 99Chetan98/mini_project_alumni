import React , {useEffect,useState,useRef} from 'react';
import Header from './NavHeader';
import {NavLink, useHistory} from 'react-router-dom';
import './style.css';
import img from '../../img/default.jpeg';
import Loader from './Loader';
import Mates from './Mates';
import logo2 from '../../profilepic/default.jpeg';
import { set } from 'mongoose';

function Profile(props) {
    const [imo,setimo]=useState({img})
    const history=useHistory();
    const [userdata,setuserdata]=useState([])
    const [profdata,setprofdata]=useState([])
    const [pp,setpp]=useState(img);
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
            setprofdata(data.profile_pic);
           

                   
        }catch(e){
            console.log(e);
            history.push('/Login');
        }
        

    }
    useEffect(() => {
        checklogged();
        
    }, []);
//     const inputFile = useRef(null) ;
//     const cliko = useRef(null) ;
// const [file,setfile]=useState({
//     filename:"",
//     class:"",
//     display:"none"
// });
//     const onButtonClick = (e) => {
//         // `current` points to the mounted file input element
//        inputFile.current.click();
//     //    console.log(e.target.value)
//       };
//   const chang=(e)=>{
//         setfile({filename:e.target.files[0].name,class:"filebut",display:""});
        
//   }
//   const handleprof=async(e)=>{
//         const fd=new FormData();
//         fd.append('file',file.filename);
   
 
//       console.log(fd);
//   }

useEffect(() => {

     setimo(profdata[profdata.length-1]);



       

}, [profdata])
// useEffect(() => {

//     setpp(imo.default);
     
//        // setpp(require(`../Pictures/${imo}`));
      

// }, [])

useEffect(() => {
    if(imo && profdata && imo!=='./undefined' && userdata && typeof(imo.pic_name) !== 'undefined'){
        // setpp(require(`../Pictures/${imo}`))
        console.log(imo.pic_name);
        setpp(require(`../Pictures/${imo.pic_name}`).default)
      
    }
    
})

console.log(pp)
    return (
    
        <>
            <Header/>
          
            <Loader timing={200}/>
            <div className="container">
                
                <div className="profileBox">  
                
                    <div className=" justify-content-center" style={{top:"-50px",position:"relative",display:"grid",zIndex:"9"}}> 
                    <img src={pp} alt="" id="profile_pic"/>
                    

                   
                    </div>  
                   
                    <h1>{userdata.name}</h1>
                   <div className="editb"><NavLink exact to="/UserDash/profile/edit"><button className="btn btn-outline-primary"><i class="fa fa-pencil-square" aria-hidden="true"></i>Edit</button></NavLink></div>
                    <hr></hr>
                    <div className="container">
                    <div className="row ">
                        <div className="col-sm-4 ">
                            <h6>Organisation currently working with</h6>
                             <h5> {userdata.organisation}</h5>  
                             <h6>Job Profile</h6>
                             <h5> {userdata.areaofexpert}</h5>  
                             <h6>Gender</h6>
                             <h5> {userdata.gender}</h5>
                        </div>
                        <div className="col-sm-4 ">
                            <h6>E-mail</h6>
                             <h5> {userdata.email}</h5>  
                             <h6>Phone no.</h6>
                             <h5> {userdata.phone}</h5>  
                             <h6>Date of Birth</h6>
                             <h5> {userdata.dob}</h5>
                        </div>
                        <div className="col-sm-4 ">
                            <h6>Association</h6>
                             <h5> {userdata.association}</h5>  
                             <h6>Department</h6>
                             <h5> {userdata.dept}</h5>  
                             <h6>Passing Year</h6>
                             <h5> {userdata.passingYear}</h5>
                        </div>
                    </div>
                    
                    </div>
                    
                </div>

            </div>
           
        </>
    )
}

export default Profile
