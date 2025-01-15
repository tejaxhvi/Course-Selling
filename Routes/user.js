const express = require('express')
const app = express();
const mongoose = require('mongoose')
const UserRoutes = express.Router()
const zod = require('zod')
const jwt = require('jsonwebtoken')

const { UsersModel } = require('../db')
const { JWT_SECRET } = require('../config')

app.use(express.json())

UserRoutes.post('/signup',async function (req , res) {
    const firstname = req.body.name;
    const email = req.body.mail;
    const password = req.body.password;

    const token = jwt.sign({ password : password} , JWT_SECRET)
    console.log(token)

    await UsersModel.create({    // should be a await because it may take time
        email : email,
        password : password,
        name : firstname
    })


    res.json({message : "This is User Login Endpoint"}) 
})


UserRoutes.post('/login',async function (req , res) {


    res.json({message : "This is User Login Endpoint"})
})


module.exports = {  // Always uses Object type while exports variables
    UserRoutes : UserRoutes
};