const express = require('express')
const UserRoutes = express.Router()


UserRoutes.post('/signup',async function (req , res) {


    res.json({message : "This is User Login Endpoint"}) 
})


UserRoutes.post('/login',async function (req , res) {


    res.json({message : "This is User Login Endpoint"})
})


module.exports = {  // Always uses Object type while exports variables
    UserRoutes : UserRoutes
};