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
    },
    update: async(req,res) => {
        let {id} = req.params
        try{
            let itinerary = await Itinerary.findOneAndUpdate({_id:id},req.body,{new:true})
            itinerary ?
            res.status(200).json({
                response: itinerary,
                    success:true,
                    message: 'Itinerary updated'
            }) :
            res.status(404).json({
                success:false,
                message:'Itinerary not found'
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    destroy: async(req, res) => {
        let {id} = req.params
        try {
            let itinerary = await Itinerary.findByIdAndRemove(id)
            itinerary ?
            res.status(200).json({
                    response: itinerary,
                    success:true,
                    message: 'Itinerary deleted'
            }) :
            res.status(404).json({
                success:false,
                message:'Itinerary not found'
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    }
} 

module.exports = controller