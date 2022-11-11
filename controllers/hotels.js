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
        let query = {}
        let order = {}
        let name
        try{
            req.query.name?
            name= req.query.name.toLowerCase() : ''
            name ? query.name = { $regex : name, $options: 'i' } : ''
            req.query.order?
            order = {name:req.queryorder} : ''
            let hotel = await Hotel.find(query).sort(order).populate('userID',["name","photo"])
            if(hotel){
                res.status(200).json({
                    response: hotel,
                    success:true,
                    message: 'all hotels are here!'
                })
            }else{
                res.status(404).json({
                    success:false,
                    message:'not found'
                })
            }
            
        }catch(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    update: async (req,res)=>{
        let {id} = req.params
        try{
            let hotel = await Hotel.findOneAndUpdate({_id:id},req.body,{new:true})
            hotel? res.status(200).json({
                response: hotel,
                    success:true,
                    message: 'the hotel was update'
            }) : res.status(404).json({
                success:false,
                message:'not found'
            })
        }catch(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    destroy: async (req,res)=>{
        let {id} = req.params
        try{
            let hotel = await Hotel.findOneAndDelete({_id:id})
            hotel? res.status(200).json({
                response: hotel,
                    success:true,
                    message: 'the hotel was delete'
            }) : res.status(404).json({
                success:false,
                message:'not found'
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