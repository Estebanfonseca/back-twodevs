const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    name:{type:String,required:true},
    lastname:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    code:{type:String,required:true},
    password:{type:String,required:true},
    verified:{type:Boolean,required:true},
    logged:{type:Boolean,required:true}

})

const Admin = mongoose.model('admins',schema)
const User = mongoose.model('users', schema)

module.exports = {Admin, User}