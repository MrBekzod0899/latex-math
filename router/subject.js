const {Router}=require('express')
const router=Router()
const Subject=require('../model/subject')
const upload=require('../middleware/file')

router.get('/',async(req,res)=>{
    let subjects=await Subject.find().lean()
    subjects=subjects.map(subject=>{
        subject.status ?
        subject.status=`<span class="badge badge-pill badge-success">faol</span>`
        : subject.status=`<span class="badge badge-pill badge-danger">no faol</span>`
    return subject
    })
    res.render('page/subject/subject',{
        isSubject:true,
        title:'Subject',
        subjects
    })
})

router.post('/',async(req,res)=>{
    let {name,status}=req.body
    console.log(req.body)
    status=status || 0

    let newSubject=await new Subject({name,status})
    await newSubject.save()
    res.redirect('/subject')
})


router.get('/delete/:id',async(req,res)=>{
    let _id=req.params.id;
    await Subject.findOneAndDelete({_id})
    res.redirect('/subject')
    
})

router.get('/status/:id',async(req,res)=>{
    let _id=req.params.id
    let statusSubject=await Subject.findById(_id).lean()
    statusSubject.status=statusSubject.status==1 ? 0 : 1
    await Subject.findByIdAndUpdate(_id,statusSubject)
    res.redirect('/subject')
})


router.get('/get/:id',async(req,res)=>{
    let _id=req.params.id
    let editSubject=await Subject.findOne({_id}).lean()
    res.send(editSubject)
})

router.post('/save',async(req,res)=>{
    let {_id,name,status}=req.body
    status=status || 0

    let editSubject=await Subject.findByIdAndUpdate(_id,{name,status})
    await editSubject.save()
    res.redirect('/subject')
})


module.exports=router