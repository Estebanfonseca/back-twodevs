const {idDontMatchResponse} = require("../config/responses/responses")
let City = require('../models/City')

const cityUserIdExists =  async(req,res,next) => {
    let city = await City.findOne({_id: req.params.id})
    if(city.userId.equals(req.user._id)){
        return next()
    } else{
        return idDontMatchResponse(req, res)
    }
}

module.exports = cityUserIdExists