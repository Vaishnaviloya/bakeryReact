var mongoose=require("mongoose");

mongodb://localhost:27017/first
mongoose.connect("mongodb://localhost:27017/MYOrder").then(()=>{
    console.log("connection successful...");
}).catch((err)=>{
    console.log("connection UN successful....");
})
