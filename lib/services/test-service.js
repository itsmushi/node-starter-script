const utils=require('../utils')
const Joi = require('joi')

const testModel=require('../models/test-model')

const createSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
   
  }) 

const updateSchema =null

service= utils.createService(testModel,createSchema,updateSchema)


service.special= ()=>{
   //do some stuffs on db using the model which is customer
    //    ie function can be async
    console.log("some logic running...");
    return true
}

module.exports=service









