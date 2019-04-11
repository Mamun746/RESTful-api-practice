const mongoose=require('mongoose')
const validator=require('validator')
const Schema=mongoose.Schema


const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                console.log(value);
                
            }
        }
        
    },
    password:{
        type:String,
        required:true,
        minlength:5
    }
})


const User=mongoose.model('User',userSchema)

module.exports=User