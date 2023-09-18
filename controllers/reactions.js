const Reaction = require('../models/Reaction')

const controller = {
    read: async(req, res) => {
        let query
        if(req.query.itineraryId){
            query = {itineraryId: req.query.itineraryId}
        }
        if(req.query.showId){
            query = {showId: req.query.showId}
        }
        if(req.query.userId){
            query = {userId: {$in: [req.query.userId]}}
        }
        try {
            let reactions = await Reaction.find(query).populate('itineraryId', ['photo', 'name']).populate('showId', ['photo', 'name'])
            reactions.length > 0 ?
            res.status(200).json({
                response: reactions,
                success: true,
                message: "success"
            }) :
            res.status(404).json({
                success:false,
                message:'Reactions not found'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    create: async(req, res) => {
        try {
            req.body.name = req.body.name.toLowerCase()
            let reaction = await Reaction.create(req.body)
            res.status(201).json({
                id: reaction._id,
                success: true,
                message: "new reaction created"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    update: async(req, res) => {
        try {
            let updatedReaction
            let queryName = req.query.name.toLowerCase()
            let reaction = await Reaction.findOne({name: queryName, itineraryId: req.query.itineraryId})
            if(reaction){
                if(reaction.userId.includes(req.user._id)){
                    await Reaction.findOneAndUpdate(
                        {name: queryName, itineraryId: req.query.itineraryId}, 
                        {$pull: {userId: req.user._id}},
                        {new: true})
                        res.status(200).json({
                            success: true,
                            message: "reaction off"
                        })
                } else{
                    if(req.query.itineraryId){
                        await Reaction.findOneAndUpdate({itineraryId: req.query.itineraryId, userId: {$in: [req.user._id]}}, {$pull: {userId: req.user._id}}, {new: true})
                        updatedReaction = await Reaction.findOneAndUpdate(
                            {name: queryName, itineraryId: req.query.itineraryId}, 
                            {$push: {userId: req.user._id}}, 
                            {new: true})
                    }
                    if(req.query.showId){
                        await Reaction.findOneAndUpdate({showId: req.query.showId, userId: {$in: [req.user._id]}}, {$pull: {userId: req.user._id}}, {new: true})
                        updatedReaction = await Reaction.findOneAndUpdate(
                            {name: queryName, showId: req.query.showId}, 
                            {$push: {userId: req.user._id}}, 
                            {new: true})
                    }
                        res.status(200).json({
                            response: updatedReaction,
                            success: true,
                            message: "reaction on"
                        })
                }
            } else {
                res.status(404).json({
                    success:false,
                    message:'Reaction not found'
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async(req, res) => {
        try {
            let updateReaction = await Reaction.findByIdAndUpdate(req.params.id, {$pull: {userId: req.user._id}})
            res ?
            res.status(200).json({
                response: updateReaction,
                success: true,
                message: "Reaction deleted"
            }) :
            res.status(404).json({
                success: false,
                message: "Reaction not found"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
}

module.exports = controller