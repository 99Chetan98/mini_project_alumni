const mongoose=require("mongoose");
const DB=process.env.DATA_BASE;
mongoose.connect(DB,{
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
})