const { Router } = require('express')
const AdminRoutes = Router();

AdminRoutes.post('/signup',async function (req, res) {
    const signup_username = req.body.username;
    const signup_password = req.body.password;

    res.json({
        message : "This is Admin Sign-up Endpoint Route"
    })
})

AdminRoutes.post('/login',async function (req, res) {
    const login_username = req.body.username;


    res.json({
        message : "This is Admin Login Endpoint Route"
    })
})

module.exports= AdminRoutes;

