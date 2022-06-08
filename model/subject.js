const {Schema,model}=require('mongoose')

const subject=new Schema({
    name:String,
    status:{
        type:Boolean,
        default:true
    }
})

module.exports=model('Subject',subject)