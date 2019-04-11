const express=require('express')
const path=require('path')
const morgan=require('morgan')
const bodyParser = require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')
const contactRouter=require('./api/routes/contact')
const userRouter=require('./api/routes/user')

const app=express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT=process.env.PORT||3000

mongoose.connect('mongodb://127.0.0.1:27017/contact-data',{useNewUrlParser:true})

const db=mongoose.connection

db.once('open',()=>{
    console.log("database connected");
    
})
db.on('error',()=>{
    console.log('Failed to connect');
    
}
)






// app.use(express.static(path.join(__dirname,'public')))

// Middleware function 
// app.use((req,res,next)=>{
//     console.log("I am a middleware ");
//     next()
// })

app.use('/api/contact',contactRouter)
app.use('/api/users',userRouter)

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','help.html'))
// })



app.listen(PORT,()=>console.log(`Server start on ${PORT}`)
)


