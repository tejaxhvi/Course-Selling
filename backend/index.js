const express = require('express')
const app = express()
const mongo = require('mongoose')
const cors = require('cors')

const { PORT } = require('./config')

const { UserRoutes } = require('./Routes/user')
const { AdminRoutes } = require('./Routes/admin')
const { CoursesRoutes } = require('./Routes/courses') 
const { reqcounter } = require('./middlewares/reqcounter')

const { CoursesModel } = require('./db')

app.use(express.json())
app.use(cors())
app.use(reqcounter)

app.get('/api/courses' , async (req , res) => { // show all the courses available on the site
    
    const Courses = await CoursesModel.find({
        // find everything in database without authentication
    })
    console.log(Courses);
    

    res.json({
        Courses,
    })
})

app.use('/api/user' , UserRoutes)
app.use('/api/admin', AdminRoutes)
app.use('/api/course', CoursesRoutes) 

app.listen(PORT , function(){
    console.log(`Server is connected to Port-${PORT}`)
    const { DB_ADDRESS } = require('./config')
    mongo.connect(DB_ADDRESS)
    
})
