// import Nav from './components/Nav';
import Home from './components/Home';
import { Route,Switch, BrowserRouter ,useHistory} from "react-router-dom";
import React ,{useState,useEffect}from 'react';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Userlog from './components/Login/UserHome';
import Notification from './components/Login/Notification';
import Profile from './components/Login/Profile';
import Find from  './components/Login/BatchConn';
import Logout from  './components/Logout';
import  Batch_Profile from  './components/Login/Batch_Profile';
import  Pending from  './components/Login/Pending';
import  Mates from  './components/Login/Mates';
import EditProfile from './components/Login/EditProfile';
import  ConnectReq from  './components/Login/ConnectReq';
import  Mate_profile from  './components/Login/Mate_profile';
import Admin from './components/Admin/Admin';
import AdminPanel from './components/Admin/AdminPanel';
import Verification from './components/Admin/Verification';
import AccessPending from  './components/AccessPending';
import PostEvent from './components/Admin/PostEvent';
import PostNews from './components/Admin/PostNews';
import Veri_data from './components/Admin/Veri_data';
import All_Event from './components/Admin/All_Event';
import Edit_Event from './components/Admin/Edit_Event';
import View_Event from './components/Admin/View_Event';
import All_News from './components/Admin/All_News';
import Edit_News from './components/Admin/Edit_News';
import View_News from './components/Admin/View_News';
import All_newsroom from './components/All_newsroom';
import News from './components/News';
import AllEve from './components/AllEvents';
import IndiEvents from './components/IndiEvents';
import Declined from './components/Declined';
const App=()=>{
    
  return(
    <>

        
        
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/About">
            <About/>
        </Route>
        <Route exact path="/Login">
            <Login/>
        </Route>
    
        <Route exact path="/Register">
            <Register/>
        </Route>
        <Route exact path="/Regi">
                 
        </Route>
      
        
        
        <Route exact path="/UserDash">
                         <Userlog/>
        </Route>
        
            
        <Route exact path="/UserDash/Profile">
                <Profile name={'userdata'}/>
            </Route>
            <Route exact path="/UserDash/Notification">
                    <Notification/>
            </Route>
            
            <Route exact path="/UserDash/Find/connection_request">
                    <ConnectReq />
            </Route>
            <Route exact path="/UserDash/Find">
                    <Find/>
            </Route>
            <Route exact path="/Logout">
                    <Logout/>
            </Route>
            
            <Route exact path="/UserDash/Batch_Profile">
                    <Batch_Profile/>
            </Route>
            <Route exact path="/UserDash/Find/pending_request">
                    <Pending />
            </Route>
            <Route exact path="/UserDash/Find/your_mates">
                    <Mates />
            </Route>
            <Route exact path="/UserDash/profile/edit">
                <EditProfile/>
            </Route>
            <Route exact path="/UserDash/Mate_profile">
                <Mate_profile/>
            </Route>

            <Route exact path="/admin">
                <Admin/>
            </Route>
            <Route exact path="/AdminPanel">
                <AdminPanel/>
            </Route>
            <Route exact path="/Verification_Request">
                <Verification/>
            </Route>
            <Route exact path="/UserDash/Pending">
                <AccessPending/>
            </Route>
            <Route exact path="/Post_Event">
                <PostEvent/>
            </Route>
            <Route exact path="/Post_News">
                <PostNews/>
            </Route>
            <Route exact path="/Verification_data/:access">
                <Veri_data/>
            </Route>
            <Route exact path="/All_Event">
                <All_Event/>
            </Route>
       
            <Route exact path="/Edit_Event/:id">
                <Edit_Event/>
            </Route>
           
                   
            <Route exact path="/View_Event/:id">
                <View_Event/>
            </Route>
            <Route exact path="/All_News">
                <All_News/>
            </Route>
            <Route exact path="/Edit_News/:id">
                <Edit_News/>
            </Route>
            <Route exact path="/View_News/:id">
                <View_News/>
            </Route>
            <Route exact path="/All_NewsRooms">
                <All_newsroom/>
            </Route>
            <Route exact path="/News/:id">
                <News/>
            </Route>
            <Route exact path="/AllEvents">
                <AllEve/>
            </Route>
            <Route exact path="/EventInformation/:id">
                <IndiEvents/>
            </Route>
         
            
            <Route exact path="/UserDash/Declined">
                <Declined/>
            </Route>
    </>
    
  );
}
export default App;
