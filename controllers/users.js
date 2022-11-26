const User = require('../models/User')
const bcrypt = require('bcryptjs')

const controller = {
    create: async(req, res) => {
        try{
            let newEmail = req.body.email.toLowerCase()
            let alreadyExist = await User.find({email: { $regex : new RegExp(`^${newEmail}$`, 'i') }})
            if(alreadyExist.length > 0){
                res.status(400).json({
                    success: false,
                    message: "user email already exists"
                })
            } else{
                let newUser = await User.create(req.body)
                res.status(201).json({
                    id: newUser._id,
                    success: true,
                    message: "new user created"
                })
            }
        } catch(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    sign_in: async(req,res)=>{
        const {password} = req.body
        const {user} = req
        try{
            const verifyPass = bcrypt.compareSync(password,user.password)
            if(verifyPass){
                await User.findOneAndUpdate({_id:user._id},{logged:true})
                const token = jwt.sign({name:user.name,photo:user.photo,logged:user.logged},process.env.KEY_JWT,{expiresIn:60*60*24})
                return res.status(200).json({
                    response:{user,token},
                    success:true,
                    message:'welcome' + user.name
                })
            }
            return 'no se pudo'
        } catch(err){
            res.status(400).json({
                success: false,
                message: err.message,

            })
        }
    }
}

module.exports = controller