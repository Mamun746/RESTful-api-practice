const mongoose=require('mongoose')
const validator=require('validator')

const Schema=mongoose.Schema

const contactSchema=new Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                console.log(value);
                
            }
        }
        
    }
})


const Contact=mongoose.model('Contact',contactSchema)

module.exports=Contact