const User=require('../models/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const registerUserController=(req,res,next)=>{
    
    bcrypt.hash(req.body.password, 10).then(function(hash) {
        // Store hash in your password DB.

        let user=new User({
            email:req.body.email,
            password:hash
        })
        user.save().then((user)=>{
            res.json({
                user,
               
            })
        }).catch((err)=>{
            res.json(err)
        })
    });

}
const loginController=(req,res,next)=>{
    let email=req.body.email
    let password=req.body.password

    User.findOne({email})
    .then((user)=>{
        if(user){
            bcrypt.compare(password, user.password).then(function(result) {
                
                if (result) {
                    let token=jwt.sign({email:user.email,_id:user._id},'secret',{expiresIn:'2h'})
                    res.json({
                        message:'Login successfully',
                        token
                    })
                }else{
                    res.json({
                        message:'Password dose not match'
                    })
                }
            })
        }
        else{
            res.json({
                message:'give correct password'
            })
        }

    }).catch((err)=>{
        res.json(err)
    })
}

const getAllUser=(req,res,next)=>{
    User.find().then((user)=>{
        res.json({
            user,
            
        })

    }).catch((err)=>{
        console.log(err);
        
    })
}

module.exports= {
    registerUserController,
    getAllUser,
    loginController
}