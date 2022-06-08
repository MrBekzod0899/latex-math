const {Schema, model}=require('mongoose')

const test=new Schema({
    teacher:{
        type:Schema.Types.ObjectId,
        ref:'Teacher'
    },
    subject:{
        type:Schema.Types.ObjectId,
        ref:'Subject'
    },
    variant:{
        type:String
    },
    file:String
})

module.exports=model('Test',test)