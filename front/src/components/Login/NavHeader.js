import React,{useEffect, useState} from 'react';
import './style.css';
import img from '../../img/top.jpg';
import logo from '../../img/University-Logo.png';
import { NavLink } from "react-router-dom";
const NavHeader = () => {
    const [search,setsearch]=useState("");
    const [scale,setscale]=useState("scale(0)");
    const [user,setuser]=useState([]);
    const SetInput=(e)=>{

            setsearch(e.target.value);
            setscale("scale(1)")
            fetch("/find",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json; charset=utf-8',
                    "Access-Control-Allow-Origin": "*",
                  },
                  body:JSON.stringify(
                    {
                        search
                    }
                  )
            }).then(res=>res.json())
            .then(results=>{
                setuser(results.user);
                
                
            }).catch(()=>{
                
            })
            
    }
    const set=()=>{
        setscale("scale(0)");
    }
    // useEffect(async()=>{
    //     // try{
    //     //     const res=await fetch(`/find/${search}`,{
    //     //         method:"GET",
               
    //     //         headers:{
    //     //         Accept:"application/json",
    //     //         'Content-Type':'application/json'
    //     //         },
    //     //         credentials:"include"
    //     //     });
    //     //     const data=await res.json();
    //     //     console.log(data);
    //     // }catch(e){
    //     //     console.log(e);
           
    //     // }

    // })
// console.log(user);

    return (
        <>
        <div className="HeadBar">
        <img src={logo} alt="" id="prof"/>
        <h1>Allumni Association</h1>
        <div className="Navigation">
            <NavLink  exact activeClassName="activ2"  to="/UserDash"><i className="fa fa-home" id="navicon" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Home" delay="100"></i></NavLink>
            <NavLink exact  activeClassName="activ2" to="/UserDash/Find"><i className="fa fa-users" id="navicon" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Connect"></i></NavLink>
            <NavLink exact activeClassName="activ2" to="/UserDash/Notification"><i className="fa fa-bell" id="navicon" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Notifications"></i></NavLink>
            <NavLink exact activeClassName="activ2" to="/UserDash/profile"><i className="fa fa-user"  id="navicon" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Profile"></i></NavLink>
        </div>
        <div className="d-flex w-100" style={{justifyContent:"flex-end"}}>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" onChange={SetInput} value={search} className="usearch" name="search" placeholder="Search" autoComplete="off" required/>

            <img src={img} alt="" id="userprof"/>

            <div className="boxmenu">
               
                    <ul>
                        <li>
                        <NavLink  exact activeClassName="activ"  to="/Logout"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</NavLink>
                        </li>
                        <hr/>
                        <li>
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>  Feedback
                        </li>
                    </ul>
            </div>
        </div>

    </div>
            <div className="d-flex justify-content-end">
            <div className="searchBox" style={{transform:scale}}>
                <h6 className="d-flex justify-content-end" style={{margin:"5PX 10PX 0PX 0PX",cursor:"pointer"}} ><i class="fa fa-times" aria-hidden="true" onClick={set}></i></h6>
                <ul>
 
                    {
                        user.map(e=>{
                            return(
                                <div className="d-flex se">
                                <img src={img} alt="" id="searchimg"/>
                                   <li>{e.name}</li>
                                </div>
                            
                            ) 
                        })
                    }
                </ul>
            </div>
            </div>
            </>
    )
}

export default NavHeader
