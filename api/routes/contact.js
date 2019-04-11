const express=require('express')
const router=express.Router()
const controller=require('../controller/contact')
const auth=require('../middleware/authentication')


router.get('/',controller.getAllContactController)
router.get('/:id',controller.getSingleContact)
router.post('/',auth,controller.postNewContactController)
router.delete('/:id',auth,controller.deleteContact)
router.put('/:id',auth,controller.editContact)

// router.get('/:id',(req,res,next)=>{ 
// res.json({
//     message:'I am a single contact'
// })
// })

// router.put('/:id',(req,res,next)=>{ 
//     res.json({
//         message:'I am put contact'
//     })
//     })

//     router.delete('/:id',(req,res,next)=>{ 
//         res.json({
//             message:'I am delete contact'
//         })
//         })
module.exports=router