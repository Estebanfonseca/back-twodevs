const passport = require('passport')
const passportJwt = require('passport-jwt')
const {KEY_JWT} = process.env
const User = require('../models/User')


passport.use(
    new passportJwt.Strategy({
        jwtFromRequest:passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:KEY_JWT
    },
    async(jwt_payload,done)=>{
        try{
            let user = await User.findOne({_id:jwt_payload._id})
            if(user){
                user = {
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    photo:user.photo,
                    role:user.role
                }
                return done(null,user)
            }else{
                return done(null,false)
            }
        }catch(err){
            console.log(err)
            return done(err,false)
        }
    }) 
)

module.exports=passport
