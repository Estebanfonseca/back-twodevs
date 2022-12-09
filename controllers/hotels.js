const Hotel = require('../models/Hotel')


const controller = {
    create: async(req, res) => {
        try{
            let newName = req.body.name.toLowerCase()
            let alreadyExist = await Hotel.find({name: { $regex : new RegExp(`^${newName}$`, 'i') }})
            if(alreadyExist.length > 0){
                res.status(400).json({
                    success: false,
                    message: "hotel name already exists"
                })
            } else{
                let newHotel = await Hotel.create(req.body)
                res.status(201).json({
                    response: newHotel,
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
        let {id} = req.params
        try{
            if(id){
                let hotelid = await Hotel.findById(id).populate('userID',["name","photo"])
                hotelid? res.status(200).json({
                    response: hotelid,
                    success:true,
                    message:'details of hotel here' 
                }) : res.status(404).json({
                    success:false,
                    message:'Hotel not found'
                })
            }else if(req.query.userID){
                let hotels = await Hotel.find({userID: req.query.userID})
                hotels ?
                res.status(200).json({
                    response: hotels,
                    success: true,
                    message: "found cities"
                }) :
                res.status(404).json({
                    success: false,
                    message: "no cities found"
                })
            } else{
                req.query.name?
                name= req.query.name.toLowerCase() : ''
                name ? query.name = { $regex : name, $options: 'i' } : ''
                req.query.order?
                order = {name:req.query.order} : ''
                let hotel = await Hotel.find(query).sort(order)populate('cityID',["name","photo"])
                hotel ?
                    res.status(200).json({
                        response: hotel,
                        success:true,
                        message: 'all hotels are here!'
                    }):
                    res.status(404).json({
                        success:false,
                        message:'Hotels not found'
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
                message:'Hotel not found'
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
                message:'Hotel not found'
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
