const Itinerary = require('../models/Itinerary')

const controller = {
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