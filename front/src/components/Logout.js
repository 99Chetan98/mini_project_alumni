import React from 'react'
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const Logout = () => {
    const history=useHistory();
useEffect(() => {
        fetch("/logout",{
            mathod:"GET",
            headers:{
            'Content-Type':'application/json; charset=utf-8'
            }
        }).then((res)=>{
            history.push("/Login");
            if(res.status!=200){
                throw new Error(res.error);
            }
        });
})

    return (
        <div>
            
        </div>
    )
}

export default Logout
