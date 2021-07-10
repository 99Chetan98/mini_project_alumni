import React from 'react'
import {useEffect,useState,useContext} from 'react';
import {useHistory,NavLink} from 'react-router-dom';

const PrintNotification = (props) => {
    const history=useHistory();
    // const [Data,setData]=useState({
    //     about:"",
    //     username:"",
    //     id:"",
    //     path:""

    // })
   if(props.data.about=='connect'){
        // setData({
        //     about:"sent you connection request",
        //     username:props.data.data.username,
        //     id:props.data.data.user,
        //     path:""
        // })
        var about="sent you connection request , tap to view request";
       var username=props.data.data.username;
       var id=props.data.data.user;
        var path=`/UserDash/Batch_Profile?uid=${id}`;
   }
   else  if(props.data.about=='Accepted'){
     var about="and you are connected now ,tap to view full profile";
     var username=props.data.data.username;
     var id=props.data.data.user;
     var path=`/UserDash/Mate_profile?user_req=${id}`;
   }
    

    return (
        <>
        <div className="NotiBox">
                <h1 onClick={()=>history.push(path)}><i class="fa fa-bell" aria-hidden="true"></i> {username+" "+about}</h1>
        </div>
        
        </>
        
    )
}

export default PrintNotification
