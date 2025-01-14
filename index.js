const express = require('express')
const app = express()

const { UserRoutes } = require('./Routes/user')
const { AdminRoutes } = require('./Routes/admin')
const { CoursesRoutes } = require('./Routes/courses')

app.use('/user' , UserRoutes)
app.use('/admin', AdminRoutes)
app.use('/course', CoursesRoutes)
console.log("routes");





app.listen(3000)