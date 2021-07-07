const mongoose=require("mongoose");
const jwt = require('jsonwebtoken');

const admin_schema=new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    tokens:[{
        token:{
            type:String
        }
    }
    ]
})

admin_schema.methods.generateAuthToken=async function(){
    try{
            let gen_token=jwt.sign({_id:this._id},process.env.Secret);
            this.tokens=this.tokens.concat({token:gen_token});
            await this.save();
            return gen_token;

    }catch(e){
        console.log(e);
    }
}

const admin_model=mongoose.model("Admin_Credentials",admin_schema);
module.exports=admin_model;