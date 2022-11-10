const City = require('../models/City')

const controller = {
    create: async(req, res) => {
        let newName = req.body.name.toLowerCase()
        try{
            let alreadyExist = await City.find({name : { $regex : new RegExp(`^${newName}$`, 'i') }})
            if(alreadyExist.length > 0){
                res.status(400).json({
                        success: false,
                        message: "City already exists"
                    })
                } else{
                    let newCity = await City.create(req.body)
                    res.status(201).json({
                        id: newCity._id,
                        success: true,
                        message: "new city created"
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