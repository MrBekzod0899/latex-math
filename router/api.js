const { Router } = require('express')
const router = Router()
const upload =require('../middleware/file')
const Test = require('../model/test')
const Teacher= require('../model/teacher')
const Moderator= require('../model/moderator')
const Subject= require('../model/subject')
const Category= require('../model/category')


// Categry List Api url: http://localhost:8080/api/subject \\
router.get('/subject', async(req, res) => {
    const subjects = await Subject.find({ status: 1 }).lean()
    res.send(subjects)
})

router.get('/teacher', async(req, res) => {
    const teachers = await Teacher.find().lean()
    res.send(teachers)
})
router.get('/test', async(req, res) => {
    const test = await Test.find().populate('subject').lean()
    res.send(test)
})

router.post('/test',upload.single('file'),async(req, res) => {
    const {teacher,subject,variant}=req.body
    let test=await Test.find().lean()
    console.log(req.file)
    let file=''
    if(req.file){
        file=req.file.path
    }
    const newTest=await new Test({teacher,subject,variant,file})
    console.log(newTest)
    newTest.save();
    res.redirect('http://localhost:3000/teacher')
})


router.get('/getcat/:id', async(req, res) => {
    let Attributes = await Attribute.find({ category: req.params.id }).lean()
    res.send(Attributes)
})

router.get('/getproducts/:id', async(req, res) => {
        let Products = await Product.find({ category: req.params.id }).populate('category').populate('attributes.attribut').lean()
        res.send(Products)
})
router.get('/getproducts', async(req, res) => {
    let Products = await Product.find().populate('category').populate('attributes.attribut').lean()
    res.send(Products)
})
    //get product
router.get('/product/:id', async(req, res) => {
    let Products = await Product.find({_id:req.params.id}).populate('category').populate('attributes.attribut').lean()
    let ProductAll = await Product.find({_id:{$ne:req.params.id}}).populate('category').populate('attributes.attribut').lean()
    let newProducts=[]
    newProducts.push(Products)
    newProducts.push(ProductAll)
    res.send(newProducts)
})
module.exports = router