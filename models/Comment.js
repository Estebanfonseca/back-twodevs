const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    showID:{type: mongoose.Types.ObjectId, ref:'shows'},
    itinerarieID:{type:mongoose.Types.ObjectId,ref:'itineraries'},
    userID:{type: mongoose.Types.ObjectId, ref:'users',required: true},
    date:{type: Date, default: Date.now},
    comment:{type:String,required:true}
})

const Comment = mongoose.model('comments',schema)
module.exports = Comment