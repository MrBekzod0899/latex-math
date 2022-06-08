const {Schema,model}=require('mongoose')
const moderator=new Schema({
    name:String,
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
    files:[
        {
          name:String,
          file1:String,
          file2:String
        }

    ]
})

module.exports=model('Moderator',moderator)