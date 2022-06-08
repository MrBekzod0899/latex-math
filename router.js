const {Router}=require('express')
const router=Router()
const auth=require('./middleware/auth')

const apirouter=require('./router/api')
const pagerouter=require('./router/page')
const user=require('./router/user')
const teacher=require('./router/teacher')
const moderator=require('./router/moderator')
const category=require('./router/category')
const subject=require('./router/subject')
const status=require('./router/status')


router.use('/api',apirouter)
router.use('/teacher',auth,teacher)
router.use('/moderator',auth,moderator)
router.use('/status',auth,status)
router.use('/', pagerouter)
router.use('/',user)
router.use('/category',auth,category)
router.use('/subject',auth,subject)
module.exports=router
