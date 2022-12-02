const {reactionExistsResponse} = require("../config/responses/responses")
const Reaction = require("../models/Reaction")

const reactionExists = async(req,res,next) => {
    let reaction = await Reaction.findOne({itinerayId: req.body.itineraryId, name: req.body.name})
    if(reaction){
        return reactionExistsResponse(req, res)
    } else{
        return next()
    }
}

module.exports = reactionExists