const {Schema,model}=require('mongoose')
const teacher=new Schema({
    name:String,
    subject:{
        type:Schema.Types.ObjectId,
        ref:'Subject'
    },
    login:{
        type:String,
        default:'teacher123',
    },
    password:{
        type:String,
        default:'teacher123'
    },
    status:{
        type:Boolean,
        default:false,
    },
    files:[{
        name:String,
        file:String
    }]
})

module.exports=model('Teacher',teacher)