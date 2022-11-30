const User = require('../models/User')
const {userExistsResponse} = require('../config/responses/responses')

const accountExistSignUp = async(req, res, next) => {
    const user = await User.findOne({email: req.body.email})
    user ? userExistsResponse(req, res) : next()
}

module.exports = accountExistSignUp