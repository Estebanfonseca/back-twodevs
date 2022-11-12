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
        let {id} = req.params
        try {
            if(id){
                let city = await City.findById(id).populate('userId', ['name', 'photo'])
                console.log(city);
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
                console.log(city);
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
    }
}

module.exports = controller