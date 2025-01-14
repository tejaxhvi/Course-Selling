const express = require('express')
const AdminRoutes = express.Router()

AdminRoutes.post('/signup',async function (req, res) {

    res.json({
        message : "This is Admin Sign-up Endpoint Route"
    })
})

AdminRoutes.post('/login',async function (req, res) {


    res.json({
        message : "This is Admin Login Endpoint Route"
    })
})

module.exports= {
    AdminRoutes : AdminRoutes
};

