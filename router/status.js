const {Router}=require('express')
const router=Router()
const Moderator=require('../model/moderator')
const Teacher=require('../model/teacher')

router.get('/',async(req,res)=>{
    let teachers= await Teacher.find().lean()
    let moderators= await Moderator.find().lean()
    res.render('page/status/status',{
        isAuthed:false,
        title:'Site Inforamtion',
        isStatus:true,
        teachers,
        moderators
    })
})

module.exports=router