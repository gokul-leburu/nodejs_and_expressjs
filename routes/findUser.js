const express=require("express")
const router=express.Router()
const logger=require("../middleware/logger")
const user=require("../models/userModel")
router.get("/findAll",async (req,res)=>{
    const result= await user.find()
    console.log(result)
    res.send(result)
})
module.exports=router