const multer=require('multer')

const storage=multer.diskStorage({
    destination(req,file,cb){
        cb(null,'uploads')
    },
    filename(req,file,cb){
        cb(null, new Date().toISOString().replace(/:/g,'-')+'_'+file.originalname)
        // 134r32452345_myjpg.jpg ko'rinishida keladi
    }
})

const arrTypes=['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document']

const fileFilter=(req,file,cb)=>{
    if(arrTypes.includes(file.mimetype)){
        cb(null,true)
    }
    else {
        cb(null,false)
    }
}

module.exports=multer({storage,fileFilter})