const Show = require('../models/Show')

const controller = {
    create: async(req, res) => {
        try{
            let newName = req.body.name.toLowerCase()
            let alreadyExist = await Show.find({name: { $regex : new RegExp(`^${newName}$`, 'i') }})
            if(alreadyExist.length > 0){
                res.status(400).json({
                    success: false,
                    message: "show name  already exists"
                })
            } else{
                let newShow = await Show.create(req.body)
                res.status(201).json({
                    id: newShow._id,
                    success: true,
                    message: "new show created"
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