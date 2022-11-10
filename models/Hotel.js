const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    name:{type:String,required:true},
    photo:{type:String,required:true},
    capacity:{type:Number,required:true},
    cityID:{}
})