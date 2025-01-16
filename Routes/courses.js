const express = require('express')
const CoursesRoutes = express.Router()
const { PurchaseModel } = require('../db')
const { CoursesModel } = require('../db')
const { UserMiddleware } = require('../middlewares/user')

CoursesRoutes.post('/purchase',UserMiddleware , async function (req , res){
    const {userId , courseId } = req.body;

    await PurchaseModel.create({
        userId : userId,
        courseId : courseId
    })
    const CourseDetails =  await CoursesModel.findOne({
        _id : courseId
    })
    //console.log(CourseDetails);
    
    res.json({
        message : "You have Buyed a Course",
        title : CourseDetails.title,
        description : CourseDetails.description,

    })
})

CoursesRoutes.get('/preview',async function (req , res){
    const AllCourses = await CoursesModel.find({})

    res.json({
        message : "This is the List of All Course ",
        Courses : AllCourses
    })
})

module.exports = {
    CoursesRoutes : CoursesRoutes
};