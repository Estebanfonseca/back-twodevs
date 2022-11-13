const Itinerary = require('../models/Itinerary')

const controller = {
    create: async(req, res) => {
        try {
            let newName = req.body.name.toLowerCase()
            let alreadyExist = await Itinerary.find({name: { $regex : new RegExp(`^${newName}$`, 'i') }})
            if(alreadyExist.length > 0){
                res.status(400).json({
                    success: false,
                    message: "Itinerary name already exists"
                })
            } else{
                let newItinerary = await Itinerary.create(req.body)
                res.status(201).json({
                    id: newItinerary._id,
                    success: true,
                    message: "new itinerary created"
                })
            }
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    read:async(req,res)=>{
        try{
            let itineraries = await Itinerary.find(req.query)
            itineraries ? 
            res.status(200).json({
                    response: itineraries,
                    success:true,
                    message: 'Itineraries found'
            }) :
            res.status(404).json({
                success:false,
                message:'Itineraries not found'
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