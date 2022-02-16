const findQuery=require('objection-find')
const express=require('express')

const joiValidateOptions={abortEarly:false}

exports.createService=(modelClass,createSchema=null,updateSchema=null)=>{
    const service={}

    service.findAll=async (query={})=>{
        return await findQuery(modelClass).allowAll().build(query)
    }

    service.findById=async (id)=>{
        return await modelClass.query().findById(id)
    }

    service.update=async (id,data)=>{
        
        delete data.id
        if(updateSchema!=null){
            const { error, value } =  updateSchema.validate(data,joiValidateOptions)
            if (error) throw error

        }
        return await modelClass.query().patchAndFetchById(id, data);
       
    }

    service.create=async (data)=>{
        if(createSchema!=null){
            const {error,value}=createSchema.validate(data,joiValidateOptions)
            if (error) throw error
        }

        return await modelClass.query().insert(data)
    }

    service.delete=async (id)=>{
        return modelClass.query().deleteById(id)
    }

    return service
}

exports.createRoute=(serviceClass)=>{

const controller={}

controller.findAll=async(request,response)=>{
    const customers=await serviceClass.findAll(request.query)
    return response.json(customers)
}

controller.findById=async (request,response)=>{
    const id =request.params.id
    const customer=await serviceClass.findById(id)
  
    if(!customer){
        return response.sendStatus(404)
    }
   
    response.json(customer)
}

controller.create=async (request,response,next)=>{
    const body=request.body
    try {
        const customer=await serviceClass.create(body)
        response.json(customer)
    } catch (error) {
        next(error)
    }
   
}

controller.update = async(request,response,next)=>{
    const id=request.params.id
    const body=request.body
    try {
        let customer= await serviceClass.findById(id)
        if(!customer){
            response.sendStatus(404)
        }
         customer=await serviceClass.update(id,body)
        response.json(customer)
        
    } catch (error) {
        next(error)
    }
   
}

controller.delete=async(request,response)=>{
    const id=request.params.id
    let customer=await serviceClass.findById(id)
    if(!customer){
       return response.sendStatus(404)
    }
    await serviceClass.delete(id)
    response.sendStatus(200)
}

const router=express.Router()
router.get('/',controller.findAll)
router.get('/:id',controller.findById)
router.post('/',controller.create)
router.patch('/:id',controller.update)
router.delete('/:id',controller.delete)

return router

}
