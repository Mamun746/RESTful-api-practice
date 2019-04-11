const Contact=require('../models/contact')

const getAllContactController=(req,res,next)=>{
    Contact.find()
    .then((contact)=>{
        res.json({
            contact
        })
    }).catch((err)=>{
        console.log(err);
        
    })
}

const postNewContactController=(req,res,next)=>{
    const contact=new Contact({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    })
    contact.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);   
    })
}

const getSingleContact=(req,res,next)=>{
    let id=req.params.id
    Contact.findById(id)
    .then((id)=>{
        res.json(id)

    }).catch((err)=>{
        console.log(err);
        
    })
}

const deleteContact=(req,res,next)=>{
    let id=req.params.id
    Contact.findByIdAndRemove(id)
    .then((id)=>{
        res.json(id)
    }).catch((err)=>{
        console.log(err);
        
    })
}

const editContact=(req,res,next)=>{
    let id=req.params.id
    Contact.findByIdAndUpdate(id,{
        $set:{
            name:'MMMM',
            phone:'000000000',
            email:'mmmm@gmail.com'
        }
    }).then((data)=>{
        res.json(data)
    }).then((err)=>{
        console.log(err);
        
    })
}

module.exports={
    getAllContactController,
    postNewContactController,
    getSingleContact,
    deleteContact,
    editContact
}