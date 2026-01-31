const mongoose=require("mongoose")
const User=require("./userModel") //import
mongoose.connect("mongodb://127.0.0.1:27017/mykowsika").then(()=>

    console.log("connection success using mongoose lib")
).catch(()=>{
    console.log("error connection")
})
const myinp=new User({
    
    sname:"kowsika",
    age:23,
    addr:"no.5,west street,main road,karur",
    city:"karur"
})
myinp.save().then(()=>{
    console.log("success")
    }).catch((err)=>{
        console.log("error:",err)
    })