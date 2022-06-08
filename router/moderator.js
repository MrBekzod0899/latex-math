const {Router}=require('express')
const router=Router()
const bcrypt = require('bcryptjs')
const Moderator=require('../model/moderator')

router.get('/',async(req,res)=>{
    let moderators=await Moderator.find().lean()
    moderators=moderators.map(item=>{
        item.status ?
        item.status=`<span class="badge badge-pill badge-success">faol</span>`
        : item.status=`<span class="badge badge-pill badge-danger">no faol</span>`
    return item
    })
    res.render('page/moderator/moderator',{
        isAuthed:false,
        title:'Moderator',
        isModerator:true,
        moderators
    })
})


router.post('/',async(req,res)=>{
    let {name,login,password,status}=req.body
    status=status || 0
    let checkModerator=await Moderator.findOne({login}).lean()
    if(checkModerator){
        req.flash('error',"bunday logindagi o'qituvchi mavjud")
        res.redirect('/moderator')
    }
    else{
        let hashpassword=await bcrypt.hash(password,10);
        let newModerator=await new Moderator({name,status,login,password:hashpassword})
        await newModerator.save()
        req.flash('success','Siz muvafaqqiyatli ro`yxatdan o`tdingiz')
        res.redirect('/moderator')
    }
})


router.get('/delete/:id',async(req,res)=>{
    let _id=req.params.id;
    await Moderator.findOneAndDelete({_id})
    res.redirect('/moderator')
    
})

router.get('/status/:id',async(req,res)=>{
    let _id=req.params.id
    let statusModerator=await Moderator.findById(_id).lean()
    statusModerator.status=statusModerator.status ? 0 : 1
    await Moderator.findByIdAndUpdate(_id,statusModerator)
    res.redirect('/moderator')
})


router.get('/get/:id',async(req,res)=>{
    let _id=req.params.id
    let editModerator=await Moderator.findOne({_id}).lean()
    res.send(editModerator)
})

router.post('/save',async(req,res)=>{
    let {_id,name,login,status}=req.body
    status=status || 0
    let editModerator=await Moderator.findByIdAndUpdate(_id,{name,login,status})
    await editModerator.save()
    res.redirect('/moderator')
})

module.exports=router