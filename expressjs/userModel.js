const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://gokulleburu:<passowrd>@gokulleburu.anigd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
const User=mongoose.model("Students",{
    Id:{type:String},
    Cgpa:Number,
    Name:{type:String},
})
const student1=new User({
    Id:"18BCI0093",
    Cgpa:8.5,
    Name:"gokul"
})
student1.save().then(()=>console.log("user added sucessfully"))