const {activityNotFoundResponse} = require("../config/responses/responses")
const Itinerary = require('../models/Itinerary')
const Show = require("../models/Show")

const activityExists = async(req,res,next) => {
    if(req.body.itineraryId){
        let activity = await Itinerary.findOne({_id: req.body.itineraryId})
    }
    if(req.body.showId){
        let activity = await Show.findOne({_id: req.body.showId})
    }
    if(activity){
        return next()
    } else{
        return activityNotFoundResponse(req, res)
    }
}

module.exports = activityExists