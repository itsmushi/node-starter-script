const express =require('express')
const morgan=require('morgan')
const routes=require('./routes')



const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(morgan('tiny'))
app.use(routes)


module.exports=app


