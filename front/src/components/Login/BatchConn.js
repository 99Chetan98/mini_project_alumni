import React from 'react';
import Header from './NavHeader';
import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
    import img from '../../img/default.jpeg';
import loading from '../../img/ezgif-2-6d0b072c3d3f.gif';

const BatchConn = () => {
    const [userdata,setuserdata]=useState([]);
    const [condata,setcondata]=useState([]);
    const [dispaly,setdisplay]=useState("content");
    const [load,setload]=useState('content');
    const [trure,settrure]=useState('false');
    const [sent,setsent]=useState([]

            
    );
    const [mate,setmate]=useState([]);
    const [arr,setarr]=useState([]);
    const [limit,setlimit]=useState(18);
    const history=useHistory();
    const finbatch=async()=>{
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

                   
        }catch(e){
            console.log(e);
            history.push('/Login');
        }
        
    }

    useEffect(() => {
            finbatch();
            setInterval(function(){setdisplay("none"); },1000)
    },[])

        useEffect(() => {
            fetch("/find_batchmate",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json; charset=utf-8',
                    "Access-Control-Allow-Origin": "*",
                  },
                  body:JSON.stringify(
                    {
                        year:userdata.passingYear,
                        no:limit
                    }
                  )
            }).then(res=>res.json())
            .then(results=>{
                setcondata(results.user);
                setmate(userdata.matereq)
             
              
                    setarr(userdata.conreq);
            }).catch(()=>{
                
            })

        },[userdata,limit])

        
       const ToConnect=(id)=>{
        setsent([...sent,id]);
          fetch(`/put_con/${userdata._id}`,{
              method:"POST",
              headers:{
                'Content-Type':'application/json; charset=utf-8',
                "Access-Control-Allow-Origin": "*",
              },
              body:JSON.stringify(
                {
                   id
                })
          }).then((res)=>{
              console.log(res.json);
          }).catch(e=>{
              console.log(e);
          })
        }


    

            window.addEventListener('scroll', ()=>{
                const {scrollHeight,scrollTop,clientHeight}=document.documentElement;
                const userheight=scrollTop+clientHeight+10;
               
                if(userheight>scrollHeight){
                   setTimeout( setlimit(limit+9),1000);
             
                }

        });
        const [visible,setvisible]=useState({
            find:"inherit",
            connreq:"none",
            matereq:"none",
            classA:"activo"
            
        })
        const Sento=(num)=>{
                if(num==1){
                    setvisible({
                        find:"inherit",
                        connreq:"none",
                        matereq:"none",
                        classA:"activo",
                        classB:"",
                        classC:""
                    })
                }
                else if(num==2){
                    setvisible({
                        find:"none",
                        connreq:"none",
                        matereq:"inherit",
                        classA:"",
                        classB:"activo",
                        classC:""
                    })
                }
                else if(num==3){
                    setvisible({
                        find:"none",
                        connreq:"inherit",
                        matereq:"none",
                        classA:"",
                        classC:"activo",
                        classB:""
                    })
                }


        }

     
    
    return (
        <div>
                    <Header/>
                <div className="preload" style={{display:dispaly}}><div className="boxpre"></div></div>
                <div className="container find" style={{display:visible.find}}>
                    <div className="row d-flex justify-content-center">

                        {
                            condata.map((e,key)=>{
                                var text="connect"
                                for(let i in arr)
                                {
                                        if(e._id===arr[i].reqc){

                                            var temp=0;
                                            
                                        }
                                }
                                for(let i in sent)
                                {
                                    if(sent[i]==e._id){
                                        var tru="true";
                                        var text="pending"
                                    }

                                }

                                if(e.name!==userdata.name && e.name!==null && temp!=0 ){
                                   
                                    return(
                                             <>   
                                        <div key={key}className="col-md-3 col-sm-2">
                                       <div className="d-flex justify-content-center"> <img src={img} style={{height:"100px",width:"100px"}}/></div>
                                        <h4 onClick={()=>{ history.push(`/UserDash/Batch_Profile?uid=${e._id}`);}}>{e.name}</h4>
                                        <h6>{e.dept} | {e.passingYear}</h6>
                                        <div className="d-flex justify-content-center"><button type="button" className="btn btn-primary" onClick={()=>ToConnect(e._id)} disabled={tru}>{text}</button></div>
                                         </div>
                                            {/* //onClick={()=>ToConnect(e._id,key)}// */}
                                         </>
                                    )
                                        
                                }
                            })
                            }




                    </div>



                    <div className="d-flex justify-content-center" style={{display:load}}><img src={loading} style={{height:"90px",display:load}} alt="loading"/></div>

                </div>
               
        </div>
    )
}

export default BatchConn
