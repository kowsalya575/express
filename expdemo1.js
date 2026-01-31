const exp = require("express")
const app=exp()

const mongoose=require("mongoose")
const User=require("./userModel") //import
mongoose.connect("mongodb://127.0.0.1:27017/padmaoff").then(()=>{
    console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("error connection")
})

var result=""
app.get("/showdata",(req,res)=>{
    var un=req.query["un"]
    var ag=req.query["ag"]
    var ad=req.query["addr"]
    result=result+"<br>User Name:"+un+"<br>age:"+ag+"<br>address:"+ad
   
    const myinp=new User({
    sname:un,
    age:ag,
    addr:ad
    })
myinp.save().then(()=>{
    console.log(result+"success")
    }).catch((err)=>{
        console.log("error:",err)
    })
    res.write(result+"<h1>successfully inserted</h1>")
    res.end()

}).listen(3143)
console.log("port listening @3143..........")
