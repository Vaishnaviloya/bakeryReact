var express=require("express");
var app=express();
var mongoose=require("mongoose");


var student=mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    addr:String,
    mess:String,
    mysel:String,
    phone:String

})

var order=new mongoose.model("create",student);

module.exports=order;

