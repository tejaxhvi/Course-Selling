const express = require('express')
const AdminRoutes = express.Router()
const jwt = require('jsonwebtoken')
const zod = require('zod')
const bcrypt = require('bcrypt')

const { JWT_SECRET_ADMIN } = require('../config')
const { AdminMiddleware } = require('../middlewares/admin')
const { AdminModel } = require("../db")
const { CoursesModel } = require('../db')

AdminRoutes.post('/signup',async function (req, res) {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
    
        const UserData = zod.object({
            email : zod.string().email().max(20),
            password : zod.string().min(3).max(10),
            username : zod.string().min(5).max(15)
        })
    
        const CheckUserData = UserData.safeParse({
            username : username,
            password : password,
            email : email
        })

        const IncryptedPassword = await bcrypt.hash(password , 5)
    
        if(!CheckUserData.success){
            res.json({
                message : "Incorrect Credentials"
            })
            console.log(CheckUserData.error);
            
        }else{
            await AdminModel.create({    // should be a await because it may take time
            email : email,
            password : IncryptedPassword,
            username : username
        })
        res.json({message : "You are Signed-up"}) 
        }
    })
    

AdminRoutes.post('/login',async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const FindAdmin = await AdminModel.findOne({
        username : username,
    })
    //console.log(FindAdmin)

    const DecryptPassword = await bcrypt.compare(password , FindAdmin.password)

    if(FindAdmin){
            if(DecryptPassword){
            const HashedPassword = jwt.sign({
                id: FindAdmin._id
            },JWT_SECRET_ADMIN)
            res.json({
                token : HashedPassword
            })
        }else{
            res.json({
                message : "This is wrong Password"
            })
        }
    }else{
        res.json({
            message : "You need to Create Account"
        })
    }
    
})

AdminRoutes.post('/course', AdminMiddleware , async function (req,res){
    const adminId = req.userId;

    const{ title , description , price } = req.body;

    await CoursesModel.create({
        title : title,
        description : description,
        price : price,
        creatorId : adminId
    })
    
    res.json({
        message : "This is Your Dashboard",
        
    })
})

AdminRoutes.get('/courses/bulk',AdminMiddleware, async function (req,res){
    

    res.json({
        message : "Make Changes in your Courses"
    })
})
module.exports= {
    AdminRoutes : AdminRoutes
};

