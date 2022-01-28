const express=require("express")
const app=express()
app.set("view engine","hbs")
app.get("/index",(req,res)=>{
    res.status(200).render("index1",{"user":"gokul"})
})
app.listen(3001,()=>console.log("started"))