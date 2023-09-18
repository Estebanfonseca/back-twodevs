const {idDontMatchResponse} = require("../config/responses/responses")

const verifyUser = (model) => [ 
    async(req,res,next) => {
        let item = await model.findOne({_id: req.params.id})
        if(item.userID.equals(req.user._id)){
            return next()
        } else{
            return idDontMatchResponse(req, res)
        }
    }
]

module.exports = verifyUser