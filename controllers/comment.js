const Comment = require('../models/Comment')

const controller = {
    create:async(req,res)=>{
        try{
            let comment = await Comment.create(req.body)
            res.status(201).json({
                response: comment,
                success: true,
                message: "new comment created"
            })
        }catch(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    read:async(req,res)=>{
        let {query} = req
        try{
            let comments = await Comment.find(query).sort({date:-1}).populate('userID', ['name','photo','_id'])
            comments? res.status(200).json({
                response: comments,
                    success:true,
                    message: 'the comment was update'
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
    update:async(req,res)=>{
        let {id} = req.params
        try{
            let comment = await Comment.findOneAndUpdate({_id:id},req.body,{new:true})
            comment? res.status(200).json({
                response: comment,
                    success:true,
                    message: 'the comment was update'
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
    destroy:async(req,res)=>{
        let {id} = req.params
        try{
            let comment = await Comment.findOneAndDelete({_id:id})
            comment? res.status(200).json({
                response: comment,
                    success:true,
                    message: 'the comment was delete'
            }) : res.status(404).json({
                success:false,
                message:'comment not found'
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