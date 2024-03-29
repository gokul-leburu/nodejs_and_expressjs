const express=require("express")
const app=express()
const fs=require("fs")
const bodyparser=require("body-parser")
app.use(bodyparser.json())

const loggerMw=(req,res,next)=>{
    console.log(req.method)
    console.log(req.url)
    console.log(new Date().toDateString())
    const d=new Date().toDateString()
    let s="method used "+ req.method + ",url searched by user "+req.url+",date and time " + d
    fs.writeFileSync("./logger detail.txt",s+"\n")
    next()
}
app.get("/home",loggerMw,(req,res)=>{
    console.log(req.query)
    const querydata=req.query
    if(querydata.prname)
    {
        res.send("products received")
    }
})
/*app.get("/product",(req,res)=>
{
    re
})
app.get("/products/productsearch",(req,res)=>
{

})*/
app.listen(3000,()=>{console.log("started")})



/*
//1.render html pages from express
// 2. write logger to a file
const app=require("express")()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
//querydata params
const loggerMw=(req,res,next)=>{
    console.log(req.method)
    console.log(req.url)
    console.log(new Date().toDateString())
    next()
}
app.get("/home/products",(req,res)=>{
   /* console.log(req.query)
    const querydata=req.query
    if(querydata.prname){
        res.send("products fetched")
    }*/
    /*res.send("products")
})
app.get("/home",loggerMw,(req,res)=>{
    res.status(200).send("home")
})
app.get("/product/:prname/:price",(req,res)=>{
    console.log(req.params.prname)
    console.log(req.params.price)
    res.send("Products")
    })
app.get("/products/productsearch",(req,res)=>{
    console.log(req)
    res.send("two level")
})
app.post("/products",loggerMw,(req,res)=>{

    console.log(req.body)
    res.send("success")
})
app.post("/updatepassword",loggerMw,(req,res)=>{
    console.log(req.body)
    res.send("password updated")
})
app.all("*",(req,res)=>{
    res.status(404).send("File not Found 404 ")
})
app.listen(3001,()=>{
    console.log("server started")
})*/