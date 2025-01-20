const express = require('express')
const app = express();
const UserRoutes = express.Router()
const zod = require('zod')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { UsersModel } = require('../db')
const { CoursesModel } = require('../db')
const { PurchaseModel } = require('../db')
const { JWT_SECRET } = require('../config')       // Admin should have different JWT_SECRET
const { UserMiddleware } = require('../middlewares/user')

app.use(express.json())

UserRoutes.post('/signup',async function (req , res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const UserData = zod.object({
        email : zod.string().email().max(20),
        password : zod.string().min(3).max(10),
        username : zod.string().min(5).max(15)
    })

    const IncryptedPassword = await bcrypt.hash(password, 5)  // it is promise you can check by logging it

    const CheckUserData = UserData.safeParse({
        username : username,
        password : password,
        email : email
    })

    if(!CheckUserData.success){
        res.json({
            message : "Incorrect Credentials",
            error : CheckUserData.error
        })
        console.log(CheckUserData.error);
        
    }else{
        try {
                await UsersModel.create({    // should be a await because it may take time
                email : email,
                password : IncryptedPassword,
                username : username
            })
            res.json({message : "You are Signed-up"}) 

        } catch (error) {
            console.log(error);
            res.json({message : "Incorrect Credentials"})
        }
        
    }
})


UserRoutes.post('/login',async function (req , res) {
    const username = req.body.username;
    const password = req.body.password;

    const UserFind = await UsersModel.findOne({  // the find() in place of findOne() will accept any password from user and create a token 
        username : username,
    })
    //console.log(UserFind); return a object which contains user

    const DecryptPassword = await bcrypt.compare(password ,UserFind.password)
    
    if(DecryptPassword){
        if(UserFind){
            const HashedPassword = jwt.sign({ id : UserFind._id } , JWT_SECRET )  // using db _id to create token not using username and password
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

UserRoutes.get('/purchases', UserMiddleware , async function ( req, res){
    const userId = req.userId;

    const UserCourses = await PurchaseModel.find({
        userId : userId
    })
    const FoundCourses = UserCourses.forEach(x => {
        return x.courseId  
    })

    const AllCoursesDetails = await CoursesModel.find({
        courseId : FoundCourses
    })
    //console.log(AllCoursesDetails);
    
    
    // const PurchasedCourses = []

    // for (let i = 0; i < UserCourses.length; i++) {
    //     PurchasedCourses.push(PurchasedCourses[i].courseId)
    // }
    
    // const CourseDetails = CoursesModel.find({
    //     _id : {$in : PurchasedCourses}
    // })
    res.json({
        message : "This is Your Courses",
        Coures : AllCoursesDetails
        
    })
})


module.exports = {  // Always uses Object type while exports variables
    UserRoutes : UserRoutes
};