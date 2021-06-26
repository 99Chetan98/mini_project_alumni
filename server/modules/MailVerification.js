const mongoose=require("mongoose");

const mail_schema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    OTP:{
        type:String
    }
})

const Email_data=mongoose.model("Email_Verification",mail_schema);
module.exports=Email_data;