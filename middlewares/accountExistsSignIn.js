const User = require("../models/User");
const { invalidCredentialsResponse } = require("../config/responses/responses")

async function accountExistsSignIn(req, res, next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        req.user = { 
            _id: user._id,
            name: user.name,
            email: user.email,
            photo: user.photo,
            password: user.password,
            verified: user.verified
        }

        return next()
    }
    return invalidCredentialsResponse(req,res)
}

module.exports = accountExistsSignIn