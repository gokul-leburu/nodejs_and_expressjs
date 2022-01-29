const express=require("express")
const async =require("hbs/lib/async")
const router=express.Router()
const logger=require("../middleware/logger")
const user = require("../models/userModel")
router.post("/updateUser",async(req,res)=>{
    try{
    const data=req.body
    const result=await user.findByIdAndUpdate(data._id,{country:data.country})
    console.log(result)
    res.send("successfully updated")
    }

    catch(err)
    {
        console.log(err)
        res.send("error occured")
    }
})
module.exports=router