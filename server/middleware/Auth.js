const jwt=require("jsonwebtoken");

const User=require("../modules/register");
const Auth=async(req,res,next)=>{
    try{
            const toke=req.cookies.token;
            const verify=jwt.verify(toke,process.env.Secret);
            const getuser=await User.findOne({_id:verify._id,"tokens.token":toke});
            if(!getuser){res.send("user not found");}
            req.token=toke;
            req.getuser=getuser;
            req.userid=getuser._id;
            next();
    }catch(e){
            console.log(e);
            res.status(401).send("no token");
    }

}
module.exports=Auth;