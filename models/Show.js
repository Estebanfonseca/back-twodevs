let mongoose = require('mongoose')

let schema = new mongoose.Schema({
    hotelID:{type: mongoose.Types.ObjectId, ref:'hotels',required: true},
    name:{type:String,required:true},
    description:{type:String,required:true},
    photo:{type:String,required:true},
    price:{type:Number,required:true},
    date:{type:Date,required:true},
    userID:{type: mongoose.Types.ObjectId, ref:'users',required: true}
})

const Show = mongoose.model('shows',schema)
module.exports = Show 