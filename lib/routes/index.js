const express=require('express')
const testController=require('./test-route')
const router=express.Router()

router.use('/test',testController)


module.exports=router




