import React,{useState,useEffect} from 'react'

const Loader = (props) => {
    const [load,setload]=useState("block");
    
    useEffect(() => {
        setTimeout(function(){ setload("none"); }, props.timing);
        return()=>{
            setload("block")
        }
    }, [])
    return (
        <div>
            <div className="loading" style={{display:load}}><div className="stick"></div></div>
        </div>
    )
}

export default Loader
