const express=require('express')
const UserController=require('../controller/user')
const router=express.Router()
const auth=require('../middleware/authentication')

router.post('/login',UserController.loginController)
router.post('/register',UserController.registerUserController)
router.get('/',auth,UserController.getAllUser)

module.exports=router