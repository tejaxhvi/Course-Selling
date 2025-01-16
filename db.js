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
    userId : ObjectId,  // never use _id 
    title : String,
    description : String,
    price : Number , 
    creatorId : String
})

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});


const UsersModel = mongo.model('User', User)
const AdminModel = mongo.model('Admin', Admin)
const CoursesModel = mongo.model('Courses', Courses)
const PurchaseModel = mongo.model('Purchases', purchaseSchema)

module.exports = ({
    UsersModel,
    AdminModel,
    CoursesModel,
    PurchaseModel
})