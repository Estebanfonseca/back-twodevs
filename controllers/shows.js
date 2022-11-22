const Show = require('../models/Show')

const controller = {
    create: async(req, res) => {
        try{
            let newName = req.body.name.toLowerCase()
            let alreadyExist = await Show.find({name: { $regex : new RegExp(`^${newName}$`, 'i') }})
            if(alreadyExist.length > 0){
                res.status(400).json({
                    success: false,
                    message: "show name already exists"
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
    }, 
    read:async(req,res)=>{
        let {query} = req
        try{
            let shows = await Show.find(query)
            shows? res.status(200).json({
                response: shows.map(item=>({_id:item._id,name:item.name,photo:item.photo,description:item.description,price:item.price,date:item.date})),
                    success:true,
                    message: 'the show was update'
            }) : res.status(404).json({
                success:false,
                message:'Show not found'
            })
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
            let show = await Show.findOneAndUpdate({_id:id},req.body,{new:true})
            show? res.status(200).json({
                response: show,
                    success:true,
                    message: 'the show was update'
            }) : res.status(404).json({
                success:false,
                message:'Show not found'
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
            let show = await Show.findOneAndDelete({_id:id})
            show? res.status(200).json({
                response: show,
                    success:true,
                    message: 'the show was delete'
            }) : res.status(404).json({
                success:false,
                message:'Show not found'
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