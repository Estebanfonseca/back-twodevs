const User = require('../models/User').User

const controller = {
    create: async(req, res) => {
        try{
            let newUser = await User.create(req.body)
            res.status(201).json({
                id: newUser._id,
                success: true,
                message: "new user created"
            })
        } catch(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    }
}

module.exports = controller