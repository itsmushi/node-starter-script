const utils=require('../utils')

const testModel=require('../models/test-model')

service= utils.createService(testModel)

service.special= ()=>{
   //do some stuffs on db using the model which is customer
    //    ie function can be async
    console.log("some logic running...");
    return true
}

module.exports=service