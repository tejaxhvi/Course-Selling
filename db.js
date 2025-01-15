const mongo = require('mongoose');
const Schema = mongo.Schema;
const ObjectId = Schema.ObjectId;



const User = new Schema ({
    userId : ObjectId,
    email : {type : String , unique : true},
    password : String,
    username : String
})

const Admin = new Schema({
    userId : ObjectId,
    email : {type : String , unique : true},
    password : String,
    username : String
})

const Courses = new Schema({
    _id : ObjectId,
    title : String,
    description : String,
    price : Number , 
    creatorId : String
})


const UsersModel = mongo.model('User', User)
const AdminModel = mongo.model('Admin', Admin)
const CoursesModel = mongo.model('Courses', Courses)

module.exports = ({
    UsersModel,
    AdminModel,
    CoursesModel
})