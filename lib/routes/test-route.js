const utils=require('../utils')
const testService=require('../services/test-service')


const routes=utils.createRoute(testService)

const specialRoute=(request,response)=>{
    testService.special() //execute some functions related in this route whose logic is in the service
    response.sendStatus(200);
}

routes.get('/special/:id',specialRoute)

module.exports=routes