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
const fileUpload=require('express-fileupload')
const User=require("./modules/register");
const Admin=require("./modules/admin");
const Admin_auth=require('./middleware/Admin_auth');
var nodemailer = require('nodemailer');
const path=require('path');
const Email_data=require("./modules/MailVerification");
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.post("/send_data",async(req,res)=>{
    try{
        var Access="pending";
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
            Access,
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
                if(find.Access=="pending"){
                    res.json({"msg":"pending"});
                }
                const token=await find.generateAuthToken();
                console.log(`token is ${token}`);
                res.cookie("token",token,{
                httpOnly:true
                 });
                res.json({"msg":"login"});
                
            }
            else{
                res.json({"msg":"invalid"}).status(400).send("invalid credentials");
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
    User.find()
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

app.get("/find/:matid/:userid",async(req,res)=>{
    const _id=req.params.matid;
    const _st=req.params.userid;

    

   
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
    const matre=requser.conreq.concat({reqc:_id,status:1});;
    const updat=await User.updateOne({_id:reqid},{$set:{conreq:matre}});

    if(updat && upda){
        res.status(200);
    }
})

app.post("/bemates",async(req,res)=>{
    const userid=req.body.user;
    const mateid=req.body.mateid;

    const userdata=await User.findOne({_id:userid});

    const updateU=await User.updateOne({_id:userid,"conreq.reqc":mateid},{$set:{"conreq.$.status":2}});


    const matedata=await User.findOne({_id:mateid});
    const updateM=await User.updateOne({_id:mateid,"conreq.reqc":userid},{$set:{"conreq.$.status":2}});

    if(updateU && updateM){
        res.status(200);
    }

})

app.post("/Update_data",async(req,res)=>{
    const { id,
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
        areaofexpert}=req.body;
        try{
            const update_profile=await User.updateOne({_id:id},{$set:{
                id,
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
                areaofexpert
            }})

            if(update_profile){
                res.status(201).send("updated");
            }
        }catch(e){
            console.log(e)
            res.status(400);
        }
})
// app.post("/profile_up",(req,res)=>{


//     const file=req.files.profile_pic;
//     file.mv(`${__dirname}/profile/${file}`,err=>{
//         if(err){
//             console.log(err);
//             res.status(500).send(err);
//         }
//         res.json({filename:file.name,filepath:`/profile/${file}`});
//     });
// })
app.use('/static', express.static(path.join(__dirname, 'profilepic')))
app.use(fileUpload());
app.post("/upload_pp/:id",async(req,res)=>{


    try{
 if(req.files===null){
     return res.status(400).json({msg:"its khali he"});
 }
 const file=req.files.file;


 const _id=req.params.id;
 const user=await User.findOne({_id:_id});
 const updaprof=user.profile_pic.concat({pic_name:file.name,updatetime:new Date()})
 const update_pp=await User.updateOne({_id},{$set:{profile_pic:updaprof}})
 if(update_pp){
    file.mv(`${__dirname}/../front/src/components/Pictures/${file.name}`,err=>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.status(201).json({filename:file.name,filepath:`/Pictures/${file.name}`,state:"updated"});
    })
     
 }
    }catch(e){
        console.log(e);
    }

})

app.get("/matereq/:id",(req,res)=>{
    User.findOne({_id:req.params.id})
    .select("_id name organisation areaofexpert dept passingYear email phone")
    .then(user=>{
        res.send(user)
    })
    .catch((e)=>{
        console.log(e);
    })
})

app.post("/send_email",(req,res)=>{
    var email=req.body.email;
    var number=Math.floor(Math.random()*(9999-1000))+1;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'projectx20212022@gmail.com',
          pass: '@!Nano2506@!'
        }
      });
      
      var mailOptions = {
        from:'projectx20212022@gmail.com' ,
        to: `${email}`,
        subject: 'Email Verification',
        text: `your code for verification is ${number}`
      };
      
      transporter.sendMail(mailOptions,async function(error, info){
        if (error) {
          res.send(error);
        } else {
            try{
                
                const verify=new Email_data({
                    email:email,
                   
                        OTP:number
                   
             
                }
                )
                const data=await verify.save();
                res.status(201);
                
              console.log('Email sent: ' + info.response);
            }
            catch(e){
                console.log(e)
            }
            
        }
      });
})
app.post("/Verify_OTP",async(req,res)=>{
        const {email,code}=req.body;
        const getcode=await Email_data.findOne({email:email,OTP:code});
        if(getcode){
            res.status(200).json({"msg":"success"});
        }
        else{
            res.json({"msg":"not"});
        }

})

app.post("/Admin_login",async(req,res)=>{
    try{
        const email=req.body.username;
        const pass=req.body.Pass;


        if(!email && !pass){
            res.status(400).send("fill data");
        }

        const find_admin=await Admin.findOne({email:email});
        if(find_admin){
            const check=await bcrypt.compare(pass,find_admin.password);
            if(check){
                const token=await find_admin.generateAuthToken();
                console.log(`token us ${token}`);
                res.cookie("Admin_token",token,{
                    httpOnly:true
                });
                res.status(200).json({"msg":"logged"});
            }
            else{
                res.status(400).send("invalid credentials / pass");
            }

        }
        else{
            res.status(400).send("invalid credentials //");
        }


    }
    catch(e){
        console.log(e);
    }

})

app.get("/Admin_logged",Admin_auth,(req,res)=>{
    res.status(200).send(req.getuser);
})

app.get("/registered_data",Admin_auth,(req,res)=>{
    User.find()
    .select("id name Access email phone dob gender add association dept passingYear organisation designation areaofexpert")
    .then(users=>{
        res.send(users);
    })
    .catch(e=>{
        console.log(e);
    })
})

app.post("/Verify",async(req,res)=>{
    try{
        order=req.body.str;
        _id=req.body.id;
        if(order=="verify"){
            const userveri=await User.updateOne({_id},{$set:{Access:"grant"}});
            
            if(userveri){
                res.status(201).send("verified");
                var email=req.body.email;
                
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: 'projectx20212022@gmail.com',
                      pass: '@!Nano2506@!'
                    }
                  });
                  
                  var mailOptions = {
                    from:'projectx20212022@gmail.com' ,
                    to: `${email}`,
                    subject: 'Account Verified',
                    text: `your acount was verified you can login now`
                  };
                  
                  transporter.sendMail(mailOptions,async function(error, info){
                    if (error) {
                      res.send(error);
                    } 
                  });
            }else{
                res.status(400).send("problem while verifying");
            }

        }
        else if(order=="decline"){
            const userveri=await User.updateOne({_id},{$set:{Access:"denied"}});
            
            if(userveri){
                res.status(200).send("verified");
            }else{
                res.status(400).send("problem while verifying");
            }
        }
        else{
            res.status(400).send("invalid");
        }


    }catch(e){
        console.log(e);
    }
})


app.listen(8000,()=>{
    console.log(`successfully connected `);
});