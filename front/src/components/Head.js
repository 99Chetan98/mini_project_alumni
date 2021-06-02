import React from 'react'
import Logo from '../img/University-Logo.png';
import Nac from '../img/nac.jpg';
import { NavLink } from "react-router-dom";
import '../App.css';
import {useState ,useEffect} from 'react';
const Head=()=>{
    var posi="relative";
    var dis="";
    const [change,setchange]=useState("");
    const [height,setheight]=useState("");
    const [Position, setPosition] = useState(posi);
    const [display, setdisplay] = useState(dis);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {

            const position = window.pageYOffset;
            setScrollPosition(position);
            if(position>128){
                    var possi="fixed";
                    dis="none";
                    setPosition(possi);
                    setdisplay(dis);
            }
            else{
                 possi="relative";
                 dis="";
                setPosition(possi);
                setdisplay(dis);
            }

    };

    useEffect(() => {
                         window.addEventListener('scroll', handleScroll, { passive: true });

                         return () => {
                                    window.removeEventListener('scroll', handleScroll);
                         };
    }, []);

    const myFunction=()=>{
        if(change===""){
            setchange("change");
            setheight("height");
        }
        else{
            setchange("");
            setheight("");
        }
            
    }








    return (
        <>
        <div>
            <div className="header" style={{transition:"0.4s ease-in-out"}}>
              <div className="container">
                  <img src={Logo} className="d-flex position-absolute" alt="logo" id="img2" />
                      <span>
                          <h5>Jawaharlal Nehru Engineering Collage</h5>
                          <h2 style={{textTransform: "uppercase"}}>Alumni Association</h2>
                      </span>
                      <img src={Nac} className="d-flex position-absolute" alt="logo" id="img3" />
              </div>
              <div className="hamdiv">
              <div className={change} id="ham" onClick={myFunction}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                </div>
            </div>
          </div>
          

          <div className="headerNav" style={{position:Position,transition:"0.4s"}} id={height} >  
              <ul>
                  <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                  <li><NavLink  to="/About">About</NavLink></li>
                  <li><NavLink  to="/Login">Login</NavLink></li>
                  <li><NavLink  to="/Register">Register</NavLink></li>
                  <li><NavLink  to="/Regi">Gallery</NavLink></li>
                  
              </ul>
          </div>
        </div>
        </>
    )
}

export default Head
