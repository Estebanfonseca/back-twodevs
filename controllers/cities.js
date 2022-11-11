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
                        message: "new city created"
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
        try {
            req.query.name ?
            newName = req.query.name.toLowerCase() : ''
            req.query.continent ?
            newContinent = req.query.continent.toLowerCase() : ''
            newName ? query.name = { $regex : newName, $options: 'i' } : ''
            newContinent ? query.continent = { $regex : new RegExp(`^${newContinent}$`, 'i') } : ''
            let cities = await City.find(query)
            cities.length > 0 ?
            res.status(200).json({
                response: cities,
                success: true,
                message: "found cities"
            }) :
            res.status(400).json({
                success: false,
                message: "no cities found"
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