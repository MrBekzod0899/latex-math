const {Router}=require('express')
const router=Router()
const Category=require('../model/category')
const Subject=require('../model/subject')
const upload=require('../middleware/file')

router.get('/',async(req,res)=>{
    let categories=await Category.find().populate('subject').lean()
    let subjects=await Subject.find().lean()
    categories=categories.map(category=>{
        category.status ?
        category.status=`<span class="badge badge-pill badge-success">faol</span>`
        : category.status=`<span class="badge badge-pill badge-danger">no faol</span>`
    return category
    })
    res.render('page/category/category',{
        isCategory:true,
        title:'Category',
        categories,
        subjects
    })
})

router.post('/',async(req,res)=>{
    let {title,subject,status}=req.body
    status=status || 0
    let newCategory=await new Category({title,subject,status}).populate('subject')
    await newCategory.save()
    res.redirect('/category')
})


router.get('/delete/:id',async(req,res)=>{
    let _id=req.params.id;
    await Category.findOneAndDelete({_id})
    res.redirect('/category')
    
})

router.get('/status/:id',async(req,res)=>{
    let _id=req.params.id
    let statusCategory=await Category.findById(_id).lean()
    statusCategory.status=statusCategory.status==1 ? 0 : 1
    await Category.findByIdAndUpdate(_id,statusCategory)
    res.redirect('/category')
})


router.get('/get/:id',async(req,res)=>{
    let _id=req.params.id
    let editCategory=await Category.findOne({_id}).lean()
    res.send(editCategory)
})

router.post('/save',async(req,res)=>{
    let {_id,title,subject,status}=req.body
    status=status || 0
    let editCategory=await Category.findByIdAndUpdate(_id,{title,subject,status})
    await editCategory.save()
    res.redirect('/category')
})


module.exports=router