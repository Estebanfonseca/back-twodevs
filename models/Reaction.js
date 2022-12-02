let mongoose = require('mongoose')

let schema = new mongoose.Schema({
    showId:{type: mongoose.Types.ObjectId, ref:'shows',required: false},
    itineraryId:{type: mongoose.Types.ObjectId, ref:'itineraries',required: false},
    name:{type:String,required:true},
    icon:{type:String,required:true},
    iconBack:{type:String,required:true},
    userId:[{type: mongoose.Types.ObjectId, ref:'users',required: false}]
})

const Reaction = mongoose.model('reactions',schema)
module.exports = Reaction