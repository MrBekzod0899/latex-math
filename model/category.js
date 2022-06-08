const {Schema,model}=require('mongoose')

const category=new Schema({
    title:String,
    subject:{
        type:Schema.Types.ObjectId,
        ref:"Subject"
    },
    status:{
        type:Boolean,
        default:true
    }
})

module.exports=model('Category',category)