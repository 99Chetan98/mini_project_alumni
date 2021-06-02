const express=require("express");
const app=express();
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
var cookie=require("cookie");
const bcrypt = require('bcryptjs');
const dotenv=require("dotenv");
dotenv.config({path:'./config.env'});
require("./DB/conn.js");
const authen=require("./middleware/Auth");

const User=require("./modules/register");
app.use(express.json());
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.post("/send_data",async(req,res)=>{
    try{
        const { name,
            email,
            phone,
            dob,
            gender,
            add,
            association,
            dept,
            passingYear,
            organisation,
            designation,
            areaofexpert,
            password,
            confirmpass}=req.body;
        const register=new User({
            name,
            email,
            phone,
            dob,
            gender,
            add,
            association,
            dept,
            passingYear,
            organisation,
            designation,
            areaofexpert,
            password,
            confirmpass
        });
        const data=await register.save();
        res.status(201).send(data);

    }catch(e){
        res.status(422);
    }

});

app.get("/get_data",async(req,res)=>{
    const get_data=await User.find();
    res.status(201).send(get_data);
})

app.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email && !password){
            res.status(400).send("fill data");
        }
        const find=await User.findOne({email});
        if(find){
        
            const check=await bcrypt.compare(password,find.password);

            if(check){
                const token=await find.generateAuthToken();
                console.log(`token is ${token}`);
                res.cookie("token",token,{
                httpOnly:true
                 });
                res.send("login successfully");
            
            }
            else{
                res.status(400).send("invalid credentials");
            }

        }
        else{
            res.status(400).send("invalid credentials");
        }
        
    }catch(e){
        res.status(400).send("iinvalid credentials");
    }
})

app.get("/about",(req,res)=>{
 
    res.send(req.getuser);
});

app.get("/userlog",authen,(req,res)=>{
    res.send(req.getuser);
})

app.post("/find",(req,res)=>{

      
            let userpattern=new RegExp("^"+req.body.search);
            User.find({name:{$regex:userpattern}})
            .select("_id name")
            .then(user=>{
                res.json({user})
            }).catch(e=>{
                console.log(e);
            })
           



});
app.post("/find_batchmate",(req,res)=>{

      
  no=req.body.no;
    User.find().limit( no )
    .select("_id name dept passingYear")
    .then(user=>{
        res.json({user})
    }).catch(e=>{
        console.log(e);
    })
   



});
app.get("/logout",(req,res)=>{
    res.clearCookie("token");
    res.status(200).send();
})

app.get("/find/:id",(req,res)=>{
    const _id=req.params.id;
    User.findOne({_id})
    .select("_id name organisation areaofexpert dept passingYear")
    .then(user=>{
        res.send(user);
    })
    .catch(e=>{
        console.log(e);
    })

})

app.post("/put_con/:id",async(req,res)=>{
    const _id=req.params.id;
    const reqid=req.body.id;
    const data=await User.findOne({_id});
    const conre=data.conreq.concat({reqc:reqid,status:0});
    const upda=await User.updateOne({_id},{$set:{conreq:conre}});
    const requser=await User.findOne({_id:reqid});
    const matre=requser.matereq.concat({mateid:_id,status:0});
    const updat=await User.updateOne({_id:reqid},{$set:{matereq:matre}});

    if(updat && upda){
        res.status(200);
    }
})

app.listen(8000,()=>{
    console.log(`successfully connected `);
});