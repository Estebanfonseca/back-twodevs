const {idDontMatchResponse} = require("../config/responses/responses")

const userIdExists = model => [ 
    async(req,res,next) => {
        let city = await model.findOne({_id: req.params.id})
        if(city.userId.equals(req.user._id)){
            return next()
        } else{
            return idDontMatchResponse(req, res)
        }
    }
]

module.exports = userIdExists