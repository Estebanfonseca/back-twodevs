const {activityNotFoundResponse} = require("../config/responses/responses")
const Itinerary = require('../models/Itinerary')

const activityExists = async(req,res,next) => {
    let activity = await Itinerary.findOne({_id: req.body.itineraryId})
    if(activity){
        return next()
    } else{
        return activityNotFoundResponse(req, res)
    }
}

module.exports = activityExists