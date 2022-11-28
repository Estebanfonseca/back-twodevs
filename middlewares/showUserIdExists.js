const idDontMatchResponse = require("../config/responses/responses")
let Show = require('../models/Show')

const showUserIdExists =  async(req,res,next) => {
    let show = await Show.findOne({_id: req.params.id})
    if(show.userID === req.user._id){
        return next()
    } else{
        return idDontMatchResponse(req, res)
    }
}

module.exports = showUserIdExists