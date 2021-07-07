const mongoose=require("mongoose");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const regi_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:String,
        unique:true,
        required:true
    },
    dob:{
        type:String,
        
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    add:{
        type:String,
        required:true
    },
    association:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    passingYear:{
        type:String,
        required:true
    },
    organisation:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    areaofexpert:{
        type:String,
        required:true
    },
    Access:{
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    confirmpass:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    conreq:[
        {
            reqc:{
                type:String
            }
            ,
            status:{
                type:Number
            }
        }
    ],
    profile_pic:[
        {
            pic_name:{
                type:String
            },
            updatetime:{
                type:String
            }
        }
    ]


});
regi_schema.methods.generateAuthToken=async function(){
    try{
        let gen_token=jwt.sign({_id:this._id},process.env.Secret);//generate token
        this.tokens=this.tokens.concat({token:gen_token});//added to tokens
        await this.save();
        return gen_token;
    }catch(e){
        console.log(e);
    }
}

regi_schema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,10);
    }
    next();
});
const User=mongoose.model("Alumni_Registration",regi_schema);

module.exports=User;