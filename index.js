const express = require('express')
const app = express()
const jwt = require("jsonwebtoken")
const z = require("zod")


app.use(exprss.json())

app.post('/user/signup',async function (req, res) {
    const signup_username = req.body.username;
    const signup_password = req.body.password;


})

app.post('/user/login',async function (req, res) {
    const login_username = req.body.username;


    
})

app.get('/courses',async function (req, res) {  // Can see all the Available Courses on the Site

    
})

app.get('/user/courses',async function (req, res) {  // Can see all the Purchased Courses on This endpoint
    

})



