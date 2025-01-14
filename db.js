const mongo = require('mongoose');
const Schema = mongo.Schema;
const ObjectId = Schema.objectid()

// const { DB_ADDRESS }  = require('./config')
//  await mongo.connect('DB_ADDRESS')

const User = new Schema ({
    _id : ObjectId,
    email : {type : String , unique : true},
    password : String,
    firstname : String
})

const Admin = new Schema({
    _id : ObjectId,
    email : String,
    password : String,
    firstname : String
})

const Courses = new Schema({
    _id : ObjectId,
    title : String,
    description : String,
    price : Number , 
    creatorId : String
})


const UsersModel = mongoose.model('User', User)
const AdminModel = mongoose.model('Admin', Admin)
const CoursesModel = mongoose.model('Courses', Courses)

module.exports = ({
    UsersModel,
    AdminModel,
    CoursesModel
})