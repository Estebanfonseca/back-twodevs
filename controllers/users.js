const User = require('../models/User')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const accountVerificationEmail = require('./accountVerificationEmail')
const jwt = require('jsonwebtoken')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse } = require('../config/responses/responses')

const controller = {

    signUp: async(req, res, next) => {
        let verified = false
        let logged = false
        let code = crypto.randomBytes(10).toString('hex')
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
        try{
            await User.create({
                ...req.body, verified, logged, code
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
    },
    sign_in: async(req,res,next)=>{
        const {password} = req.body
        const {user} = req
        try{
            const verifyPass = bcryptjs.compareSync(password,user.password)
            if(verifyPass){
                await User.findOneAndUpdate({_id:user._id},{logged:true},{new:true})
                let token = jwt.sign({_id:user._id ,name:user.name,photo:user.photo,logged:user.logged},process.env.KEY_JWT,{expiresIn:60*60*24})
                return res.status(200).json({
                    response:{user,token},
                    success:true,
                    message:'welcome ' + user.name
                })
            }
            return res.status(401).json({
                success: false,
                message: 'email or password incorrect'
            })
        } catch(err){
            next(err)
        }
    },
    singInByToken:async(req,res,next)=>{
        let {user}= req
        try{
            return res.json({
                response:{
                    user:{
                        name:user.name,
                        photo:user.photo,
                        _id:user._id,
                        role:user.role,
                        logged:user.logged
                    }
                },
                success:true,
                message:'welcome ' + user.name
            })
        }catch(err){
            next(err)
        }
    }
}

module.exports = controller
