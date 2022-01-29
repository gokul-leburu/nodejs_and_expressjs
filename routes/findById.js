const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const user=require("../models/userModel")
router.get("/findOne",async(req,res)=>{
    const result=await user.findById({_id:"61f4c90480c3766a32e51b57"})
    res.send(result)
})
module.exports=router