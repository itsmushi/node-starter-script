const utils=require('../utils')
const testClass=require('../services/test-service')

const routes=utils.createRoute(testClass)


const specialRoute=(request,response)=>{
    serviceClass.special() //execute some functions related in this route whose logic is in the service
    response.sendStatus(200);
}

routes.get('/special/:id',specialRoute)

module.exports=routes
