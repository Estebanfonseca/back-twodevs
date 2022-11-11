const Hotel = require('../models/Hotel')

const controller = {
    create: async(req, res) => {
        try{
            let newName = req.body.name.toLowerCase()
            let alreadyExist = await Hotel.find({name: { $regex : new RegExp(`^${newName}$`, 'i') }})
            if(alreadyExist.length > 0){
                res.status(400).json({
                    success: false,
                    message: "hotel name  already exists"
                })
            } else{
                let newHotel = await Hotel.create(req.body)
                res.status(201).json({
                    id: newHotel._id,
                    success: true,
                    message: "new hotel created"
                })
            }
        } catch(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    read: async (req,res)=>{
        try{
            let hotel = await Hotel.find()
            res.status(200).json({
                response: hotel,
                success:true,
                message: 'all hotels are here!'
            })
        }catch(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    }
} 

module.exports = controller