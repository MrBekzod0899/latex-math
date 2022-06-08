const { Router } = require("express");

const router=Router()

router.get('/',async(req,res)=>{
    res.render('index',{
        title:'Math Compiler',
        isHome:true
    })
})

module.exports=router