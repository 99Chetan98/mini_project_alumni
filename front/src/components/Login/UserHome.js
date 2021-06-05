import React , {useEffect,useState,createContext} from 'react';
import Header from './NavHeader';
import {useHistory} from 'react-router-dom';
import './style.css';
import  Mates from './Mates';

export const Usercontext=createContext();


function UserHome() {
    const [user,setuser]=useState([]);
    const history=useHistory();
  const checklogged=async()=>{
        try{
            const res=await fetch("/userlog",{
                method:"GET",
               
                headers:{
                Accept:"application/json",
                'Content-Type':'application/json'
                },
                credentials:"include"
            });
            const data=await res.json();
            // console.log(data);
            setuser(data);
        }catch(e){
            console.log(e);
            history.push('/Login');
        }
        

    }
    useEffect(() => {
        checklogged();
    }, []);
    return (
    
        <>
            <Header/>
            <Usercontext.Provider value={user}>
            <Mates/>
            </Usercontext.Provider>
         
           
        </>
    )
}

export default UserHome
