const jwt=require("jsonwebtoken");

const Admin=require("../modules/admin");

const Auth_admin=async(req,res,next)=>{
    try{
        const toke=req.cookies.token;
        const verify=jwt.verify(toke,process.env.Secret);
        const getuser=await Admin.findOne({_id:verify._id,"tokens.token":toke});
        if(!getuser){res.send("user not found");}
        req.token=toke;
        req.getuser=getuser;
        req.userid=getuser._id;
        next();
    }catch(e){
        console.log(e);
        res.status(401).json({"msg":"notoken"});
    }
}
module.exports=Auth_admin;