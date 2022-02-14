const { Model }=require('objection')

class Test extends Model{
    static tableName='test'

}

module.exports=Test