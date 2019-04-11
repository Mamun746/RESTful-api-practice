const jwt=require('jsonwebtoken')

const authentication=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(' ')[1]
        const decode=jwt.verify(token,'secret')
        req.user=decode
    }catch(error){
        res.json({
            message:'Authentication failed'
        })
    }
    next()
}

module.exports=authentication