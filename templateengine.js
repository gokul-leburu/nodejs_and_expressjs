const express=require("express")
const app=express()
app.set("view engine","jade")
app.get("/index",(req,res)=>{
    res.render("index")
})
app.listen(3001,()=>console.log("started"))