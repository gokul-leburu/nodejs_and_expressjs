const express = require("express")
const fs=require("fs")
const app=express()
const fp="E:/bajaj training/expressjs/sample.html"
app.use(express.static("E:\bajaj training\expressjs"))
app.get("/home",(req,res)=>{
    res.sendFile(fp)
})
app.listen(3000,()=>console.log("started"))