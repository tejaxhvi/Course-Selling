const express = require('express')
const CoursesRoutes = express.Router()

CoursesRoutes.post('/purchase',function (req , res){

    res.json({
        message : "This is the Course preview Page"
    })
})

CoursesRoutes.get('/preview',function (req , res){

    res.json({
        message : "This is the Course Purchase Page"
    })
})

module.exports = {
    CoursesRoutes : CoursesRoutes
};