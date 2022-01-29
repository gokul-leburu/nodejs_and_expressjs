const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const user = require("../models/userModel")
router.post("/signup",async(req,res)=>{
    try{
    const data=req.body
    //data.password=await bcrypt.hash(data.password,7)
    //console.log(data.password)
    const user1=new user(
        {
            email:data.email,
            password:data.password,
            mobile:data.mobile,
            area:data.area,
            pincode:data.pincode,
            address:data.address
        }
    )
    await user1.save().then(()=>res.send("user added successfully"))
    }
    catch(err)
    {
        res.send(err)
    }
    /*user1.save((err,data)=>
    {
        if(err)
        {
            res.send(errdata)
            console.log(err.code)
        }
        else
        {
            res.send("user added successfully")
        }
    })*/
})
module.exports=router