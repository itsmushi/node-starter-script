const express =require('express')
const Joi = require('joi')
const morgan=require('morgan')
const routes=require('./routes')



const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(morgan('tiny'))
app.use(routes) 


function errorHandler (err, req, res, next) {
   
    if(err instanceof Joi.ValidationError){
        res.status(400).send({error:displayErrorProper(err)})
    }  
  }

  function displayErrorProper(error){
    const allErrors=error.details.map((e)=>{
        const key=e.context.label
        return e.message.replace(/['"]/g, '')
    })
    return allErrors
}


  app.use(errorHandler)


module.exports=app






