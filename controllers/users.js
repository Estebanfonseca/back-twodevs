const User = require('../models/User')

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
    }
}

module.exports = controller