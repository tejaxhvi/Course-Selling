const express = require('express')
const AdminRoutes = express.Router()
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config')

const { AdminModel } = require("../db")
AdminRoutes.post('/signup',async function (req, res) {
        const username = req.body.username;
        const mail = req.body.mail;
        const password = req.body.password;
    
        await AdminModel.create({    // should be a await because it may take time
            username : username,
            password : password,
            mail : mail
        })

    res.json({
        message : "Admin Account is Created"
    })
})

AdminRoutes.post('/login',async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const FindAdmin = AdminModel.findOne({
        username : username
    })
    if(FindAdmin){
        const HashedPassword = jwt.sign({
            username : username,
            password : password
        },JWT_SECRET)
        res.json({
            token : HashedPassword
        })
    }else{
        res.json({
            message : "You need to Create Account"
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

