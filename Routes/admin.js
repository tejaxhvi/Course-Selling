const express = require('express')
const AdminRoutes = express.Router()

AdminRoutes.post('/signup',async function (req, res) {
        const username = req.body.username;
        const firstname = req.body.name;
        const password = req.body.password;
    
        await UserModel.create({    // should be a await because it may take time
            user : username,
            password : password,
            name : firstname
        })

    res.json({
        message : "This is Admin Sign-up Endpoint Route"
    })
})

AdminRoutes.post('/login',async function (req, res) {


    res.json({
        message : "This is Admin Login Endpoint Route"
    })
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

