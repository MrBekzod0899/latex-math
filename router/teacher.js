const {Router}=require('express')
const router=Router()
const bcrypt = require('bcryptjs')
const Subject=require('../model/subject')
const Teacher=require('../model/teacher')

router.get('/',async(req,res)=>{
    let subjects = await Subject.find({status:1}).lean()
    let teachers=await Teacher.find().populate('subject').lean()
    teachers=teachers.map(item=>{
        item.status ?
        item.status=`<span class="badge badge-pill badge-success">faol</span>`
        : item.status=`<span class="badge badge-pill badge-danger">no faol</span>`
    return item
    })
    res.render('page/teacher/teacher',{
        isAuthed:false,
        title:'Teacher',
        isTeacher:true,
        subjects,
        teachers
    })
})


router.post('/',async(req,res)=>{
    let {name,subject,login,password,status}=req.body
    status=status || 0
    console.log(req.body)
    let checkTeacher=await Teacher.findOne({login}).lean()
    if(checkTeacher){
        req.flash('error',"bunday logindagi o'qituvchi mavjud")
        res.redirect('/teacher')
    }
    else{
        let hashpassword=await bcrypt.hash(password,10);
        let newTeacher=await new Teacher({name,subject,status,login,password:hashpassword})
        await newTeacher.save()
        req.flash('success','Siz muvafaqqiyatli ro`yxatdan o`tdingiz')
        res.redirect('/teacher')
    }
})


router.get('/delete/:id',async(req,res)=>{
    let _id=req.params.id;
    await Teacher.findOneAndDelete({_id})
    res.redirect('/teacher')
    
})

router.get('/status/:id',async(req,res)=>{
    let _id=req.params.id
    let statusTeacher=await Teacher.findById(_id).lean()
    statusTeacher.status=statusTeacher.status ? 0 : 1
    await Teacher.findByIdAndUpdate(_id,statusTeacher)
    res.redirect('/teacher')
})


router.get('/get/:id',async(req,res)=>{
    let _id=req.params.id
    let editTeacher=await Teacher.findOne({_id}).lean()
    res.send(editTeacher)
})

router.post('/save',async(req,res)=>{
    let {_id,name,subject,login,password,status}=req.body
    status=status || 0
    let editTeacher=await Teacher.findByIdAndUpdate(_id,{name,subject,login,password,status})
    await editTeacher.save()
    res.redirect('/teacher')
})



module.exports=router