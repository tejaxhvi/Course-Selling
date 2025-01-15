const express = require('express')
const app = express();
const UserRoutes = express.Router()
const zod = require('zod')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { UsersModel } = require('../db')
const { JWT_SECRET } = require('../config')

app.use(express.json())

UserRoutes.post('/signup',async function (req , res) {
    const username = req.body.username;
    const email = req.body.mail;
    const password = req.body.password;

    const UserData = zod.object({
        email : zod.string().email().max(20),
        password : zod.string().min(3).max(10),
        username : zod.string().min(5).max(15)
    })

    const IncryptedPassword = await bcrypt.hash(password, 5)  // it is promise you can check by logging it
    //console.log(IncryptedPassword);


    const CheckUserData = UserData.safeParse({
        username : username,
        password : password,
        email : email
    })

    if(!CheckUserData.success){
        res.json({
            message : "Incorrect Credentials"
        })
        console.log(CheckUserData.error.code);
        
    }else{
        await UsersModel.create({    // should be a await because it may take time
        email : email,
        password : IncryptedPassword,
        username : username
    })
    res.json({message : "You are Signed-up"}) 
    }
})


UserRoutes.post('/login',async function (req , res) {
    const username = req.body.username;
    const password = req.body.password;

    const UserFind = await UsersModel.findOne({
        username : username,
        password : password
    })
    //console.log(UserFind.password);
    const DecryptPassword = await bcrypt.compare(password ,UserFind.password)
    console.log(DecryptPassword);
    
    if(DecryptPassword){
        if(UserFind){
            const HashedPassword = jwt.sign({ password } , JWT_SECRET )
            res.json({
                token : HashedPassword
            })
    
        }else{
            res.json({message : "You are Logged-in"})
        }
    }else{
        res.json({
            message : "This is Wrong Password"
        })
    }
    
})


module.exports = {  // Always uses Object type while exports variables
    UserRoutes : UserRoutes
};