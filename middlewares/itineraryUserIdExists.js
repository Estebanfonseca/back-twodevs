const idDontMatchResponse = require("../config/responses/responses")
let Itinerary = require('../models/Itinerary')

const itineraryUserIdExists =  async(req,res,next) => {
    let itinerary = await Itinerary.findOne({_id: req.params.id})
    if(itinerary.userId.equals(req.user._id)){
        return next()
    } else{
        return idDontMatchResponse(req, res)
    }
}

module.exports = itineraryUserIdExists