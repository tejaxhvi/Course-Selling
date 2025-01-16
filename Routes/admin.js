const express = require('express')
const AdminRoutes = express.Router()
const jwt = require('jsonwebtoken')
const zod = require('zod')

const { JWT_SECRET_ADMIN } = require('../config')

const { AdminModel } = require("../db")

AdminRoutes.post('/signup',async function (req, res) {
        const username = req.body.username;
        const email = req.body.mail;
        const password = req.body.password;
    
        const UserData = zod.object({
            email : zod.string().email().max(20),
            password : zod.string().min(3).max(10),
            username : zod.string().min(5).max(15)
        })
        const IncryptedPassword = bcrypt.hash(password , 5)
    
        const CheckUserData = UserData.safeParse({
            username : username,
            password : IncryptedPassword,
            email : email
        })
    
        if(!CheckUserData.success){
            res.json({
                message : "Incorrect Credentials"
            })
            console.log(CheckUserData.error.code);
            
        }else{
            await AdminModel.create({    // should be a await because it may take time
            email : email,
            password : password,
            username : username
        })
        res.json({message : "You are Signed-up"}) 
        }
    })
    

AdminRoutes.post('/login',async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const FindAdmin = AdminModel.findOne({
        username : username,
        password : password
    })

    const DecryptPassword = await bcrypt.compare(password , FindAdmin.password)

    if(DecryptPassword){
        if(FindAdmin){
            const HashedPassword = jwt.sign({
                username : username,
                password : password
            },JWT_SECRET_ADMIN)
            res.json({
                token : HashedPassword
            })
        }else{
            res.json({
                message : "You need to Create Account"
            })
        }
    }else{
        res.json({
            message : "This is Wrong Password"
        })
    }
    
})

AdminRoutes.post('/courses',function (req,res){
    
    res.json({
        message : "Here is the List of All Your Courses"
    })
})

AdminRoutes.put('/courses',function (req,res){

    res.json({
        message : "Make Changes in your Courses"
    })
})
module.exports= {
    AdminRoutes : AdminRoutes
};

