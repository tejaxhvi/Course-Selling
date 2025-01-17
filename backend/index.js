const express = require('express')
const app = express()
const mongo = require('mongoose')

const { PORT } = require('./config')

const { UserRoutes } = require('./Routes/user')
const { AdminRoutes } = require('./Routes/admin')
const { CoursesRoutes } = require('./Routes/courses') 

app.use(express.json())

app.use('/user' , UserRoutes)
app.use('/admin', AdminRoutes)
app.use('/course', CoursesRoutes) 

app.listen(PORT , function(){
    console.log(`Server is connected to Port-${PORT}`)
    const { DB_ADDRESS } = require('./config')
    mongo.connect(DB_ADDRESS)
    
})
