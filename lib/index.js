const app=require('./app')
const config=require('./config')

const { Model }=require('objection')

const knex=require('./knex')

Model.knex(knex)



app.listen(config.port,()=>{

  console.log('Server listening on port: '+ config.port);
})




