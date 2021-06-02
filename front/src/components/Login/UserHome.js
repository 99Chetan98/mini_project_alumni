import React , {useEffect} from 'react';
import Header from './NavHeader';
import {useHistory} from 'react-router-dom';
import './style.css';

function UserHome() {
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
         
           
        </>
    )
}

export default UserHome
