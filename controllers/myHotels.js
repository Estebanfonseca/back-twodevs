const Hotel = require('../models/Hotel')

const controller = {
    read:async(req,res)=>{
        let {query} = req
        let user
        
        try{
            req.query.userID?
            user = req.query.userID:''
            let hotel = await Hotel.find(query)
            hotel.length !== 0?
            res.status(200).json({
                response: hotel,
                success:true,
                message: 'all hotels are here!'
            }):
            res.status(404).json({
                success:false,
                message:'Hotels not found'
            })

        }catch(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
    }
}}

module.exports = controller