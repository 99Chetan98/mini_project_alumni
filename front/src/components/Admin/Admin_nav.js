import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Admin.css';

const Admin_nav = () => {
    const [exten, setexten] = useState({
        width:"0px",
        temp:1,
        icon:"fa fa-bars"
    });
 
    const extend_nav=()=>{
            if(exten.temp==1){
                setexten({
                    width:"260px",
                    temp:2,
                    icon:"fa fa-times"
                })
            }
            else{
                setexten({
                    width:"0px",
                    temp:1,
                    icon:"fa fa-bars"
                })
            }
    }
    return (
        <div>
            <div className="panel-head">
                <i className={exten.icon} aria-hidden="true" onClick={extend_nav}></i> <h4>Admin Panel</h4>
                    </div>
                    <div className="panel-tray" style={{width:exten.width}}>
                            <ul>
                                <NavLink exact to="/AdminPanel" activeClassName="admin-act" ><li>Alumni Data</li></NavLink>
                                <NavLink to="/Verification_Request" activeClassName="admin-act"  exact> <li >Verification Request</li></NavLink>
                                <NavLink to="/Post_Event" activeClassName="admin-act"  exact> <li>Post Event</li></NavLink>
                                <NavLink to="/Post_News" activeClassName="admin-act"  exact> <li>Post news</li></NavLink>
                                <NavLink to="/Logout" activeClassName="admin-act"  exact> <li>Logout</li></NavLink>
                            </ul>
                    </div>
        </div>
    )
}

export default Admin_nav
