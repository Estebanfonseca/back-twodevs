const idDontMatchResponse = require("../config/responses/responses")
let Hotel = require('../models/Hotel')

const hotelUserIdExists =  async(req,res,next) => {
    let hotel = await Hotel.findOne({_id: req.params.id})
    if(hotel.userID.equals(req.user._id)){
        return next()
    } else{
        return idDontMatchResponse(req, res)
    }
}

module.exports = hotelUserIdExists