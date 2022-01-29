const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://gokulleburu:qwer$asdf@gokulleburu.anigd.mongodb.net/nodejs?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true})
const user=mongoose.model("Students",{
    email:{
        type:String,
        unique:true,
        required:[true,"please enter the email"],
       },
    password:{
           type:String,
           required:[true,"enter your pasword"],
       },
    mobile:{
        type:Number,
        required:[true,"enter ur mobile number"],
        minlength:10,
        maxlength:10,
    },
    country:{
        type:String,
        default:"IND",
    },
    pincode:{
        type:Number,
        required:true
    },
    address:String
})
module.exports=user