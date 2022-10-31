const mongoose=require("mongoose")
const DB='mongodb+srv://charu_27:RTorh76MPFabhxri@cluster0.oqxckeu.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
 }
).then(()=>{
        console.log("Connection successful");
    }).catch((err)=>{console.log("no connection",err)}); 