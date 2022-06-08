const express=require('express')
const app=express()
const mongoose=require('mongoose')
const mainHbs=require('express-handlebars')
const session=require('express-session')
const varMid=require('./middleware/var')
const MongoStore=require('connect-mongodb-session')(session)
const cors=require('cors')
const csrf=require('csurf')
const flash=require('connect-flash')
const hbs=mainHbs.create({
  defaultLayout:'admin/main',
  extname:'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')

app.use(express.urlencoded({extended:true}))
app.use(express.static('node_modules'))
app.use(express.static('public'))
app.use('/uploads',express.static('uploads'))
app.use(cors())
app.use(flash())


const mongoURL='mongodb://127.0.0.1:27017/math-compiler'
const store=MongoStore({
  collection:'session',
  uri:mongoURL
})


app.use(session({
  secret:'Maxfiy raqam',
  saveUninitialized:false,
  cookie:{
    maxAge:1000*60*60*10,
    secure:false
  },
  resave:true,
  store
}))



app.use(varMid)

let routerList=require('./router')

app.use(routerList)

const PORT=8080
async function dev(){
  try{
    await mongoose.connect(mongoURL,{
      useNewUrlParser:true
    })
    app.listen(PORT,()=>{
      console.log(`server is running on ${PORT}`)
    })
  }
  catch(error){
    console.log(error)
  }
}

dev()


// const fs = require('fs');
// const latex = require('node-latex')
// const output = fs.createWriteStream('output.pdf')

// try {
//   const data = fs.readFileSync('input.tex', 'utf8');
//   console.log(data);
//   const pdf = latex(data)
//     pdf.pipe(output)
//     pdf.on('error', err => console.error(err))
//     pdf.on('finish', () => console.log('PDF generated!'))
// } catch (err) {
//   console.error(err);
// }