const {idDontMatchResponse} = require("../config/responses/responses")
const Reaction = require("../models/Reaction")

const userIdAuthorized = async(req,res,next) => {
        let reaction = await Reaction.find({_id: req.params.id, userId: {$in: [req.user._id]}})
        if(reaction){
            return next()
        } else{
            return idDontMatchResponse(req, res)
        }
    }

module.exports = userIdAuthorized