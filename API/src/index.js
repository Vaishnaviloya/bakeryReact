var express=require("express");
var app=express();
var port=7000
app.get("/",(req,res)=>{
    console.log("hello world");
    res.send("hello world");
})

require("../connect/conn");
app.use(express.json());
app.use(express.urlencoded({extended:false}))
var order=require("../model/Sechma");

app.post("/order",async (req,res)=>{
    try{
        console.log(req.body);
          var data=await order(req.body);
          var d=await data.save();
          res.send(d);
    }catch(e){
        console.log("error");
    }
})

// app.post("/createpaper",async(req,res)=>{
//     console.log(req.body);
//     var store=await create(req.body);
//     var data=await store.save();
//     res.send(data);
// })


app.listen(port,()=>{
    console.log("listen to port no "+port);
})