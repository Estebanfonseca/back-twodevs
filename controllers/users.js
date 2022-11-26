const User = require('../models/User')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse } = require('../config/responses/responses')

const controller = {

    signUp: async(req, res, next) => {
        let verified = false
        let logged = false
        let role = 'user'
        let code = crypto.randomBytes(10).toString('hex')
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
        try{
            await User.create({
                ...req.body, verified, logged, role, code
            })
            await accountVerificationEmail(req.body.email, code)
            return userSignedUpResponse(req, res)
        } catch(err){
            next(err)
        }
    },

    verify: async(req, res, next) => {
        const {code} = req.params
        try {
            let user = await User.findOneAndUpdate(
                {code: code},
                {verified: true},
                {new: true}
            )
            user ?
            res.redirect('http://localhost:3000/login') :
            userNotFoundResponse(req, res)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = controller