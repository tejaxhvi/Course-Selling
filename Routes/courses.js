const { Router } = require('express')
const CoursesRoutes = Router();

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