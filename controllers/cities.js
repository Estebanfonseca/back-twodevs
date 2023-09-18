const City = require('../models/City')

const controller = {
    create: async(req, res) => {
        try{
            let newName = req.body.name.toLowerCase()
            let alreadyExist = await City.find({name : { $regex : new RegExp(`^${newName}$`, 'i') }})
            if(alreadyExist.length > 0){
                res.status(400).json({
                        success: false,
                        message: "City already exists"
                    })
                } else{
                    let newCity = await City.create(req.body)
                    res.status(201).json({
                        id: newCity._id,
                        success: true,
                        message: "New city created"
                    })
                }
        } catch(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    read: async(req, res) => {
        let query = {}
        let newName
        let newContinent
        let {id} = req.params
        try {
            if(id){
                let city = await City.findById(id).populate('userId', ['name', 'photo'])
                city ?
                res.status(200).json({
                    response: city,
                    success: true,
                    message: "found city"
                }) :
                res.status(404).json({
                    success: false,
                    message: "no cities found"
                })
            }else if(req.query.userId){
                let cities = await City.find({userId: req.query.userId})
                cities ?
                res.status(200).json({
                    response: cities,
                    success: true,
                    message: "found cities"
                }) :
                res.status(404).json({
                    success: false,
                    message: "no cities found"
                })
            } else{
                req.query.name ?
                newName = req.query.name.toLowerCase() : ''
                req.query.continent ?
                newContinent = req.query.continent : ''
                newName ? query.name = { $regex : newName, $options: 'i' } : ''
                newContinent ? query.continent = { $in: newContinent } : ''
                let cities = await City.find(query)
                cities ?
                res.status(200).json({
                    response: cities,
                    success: true,
                    message: "found cities"
                }) :
                res.status(404).json({
                    success: false,
                    message: "no cities found"
                })
            }
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    update: async(req, res) => {
        try {
            let {id} = req.params
            let city = await City.findOneAndUpdate({_id:id},req.body,{new:true})
            city ?
            res.status(200).json({
                response: city,
                success: true,
                message: "City updated"
            }) :
            res.status(404).json({
                success: false,
                message: "City not found"
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
    },
    destroy: async(req, res) => {
        try {
            let {id} = req.params
            let city = await City.findByIdAndDelete(id)
            city ?
            res.status(200).json({
                response: city,
                success: true,
                message: "City deleted"
            }) :
            res.status(404).json({
                success: false,
                message: "City not found"
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