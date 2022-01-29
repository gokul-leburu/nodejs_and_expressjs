const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const user= require("../models/userModel")
router.post("/delete",async (req,res)=>{
    try{
    const data=req.body
    await user.remove({email:data.email})
    res.send("successfully deleted")
    }
    catch(err)
    {

        res.send(err)
    }
})
module.exports=router