const express = require('express')
const app = express()
const mongo = require('mongoose')

const { PORT } = require('./config')

const { UserRoutes } = require('./Routes/user')
const { AdminRoutes } = require('./Routes/admin')
const { CoursesRoutes } = require('./Routes/courses')

app.use('/user' , UserRoutes)
app.use('/admin', AdminRoutes)
app.use('/course', CoursesRoutes) 
console.log("routes");

async function main(){  // This function should ensure that the server crashes if mongo is not connected
    await mongo.connect('DB_ADDRESS')
    app.listen(PORT , function(){
    console.log(`Server is connected to Port-${PORT}`);
})
}
main()
