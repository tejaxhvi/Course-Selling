const express = require('express')
const app = express()
const jwt = require("jsonwebtoken")
const z = require("zod")

const { UserRoutes } = require('./Routes/user')
const { AdminRoutes } = require('./Routes/admin')
const { CoursesRoutes } = require('./Routes/courses')

app.use('/user',UserRoutes)
app.use('/admin', AdminRoutes)
app.use('/courses', CoursesRoutes)




app.listen(3000)