const mongoose=require("mongoose");

const event_schema=new mongoose.Schema({
    heading:{
        type:String
    },
    date:{
        type:String
    },
   
    discription:{
        type:String
    }
})

const Event_model=mongoose.model("News",event_schema);
module.exports=Event_model