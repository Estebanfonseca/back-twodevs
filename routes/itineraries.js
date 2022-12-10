let router = require('express').Router()
let validator = require('../middlewares/validator')
let schema = require('../schemas/newItinerary')
let {create, read, update, destroy} = require('../controllers/itineraries')
let passport = require('../config/passport')
const userIdExists = require('../middlewares/userIdExists')
let Itinerary = require('../models/Itinerary')

router.post('/', passport.authenticate('jwt',{session:false}), validator(schema), create)
router.get('/', read)
router.get('/:id', read)
router.put('/:id', passport.authenticate('jwt',{session:false}), validator(schema), userIdExists(Itinerary), update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), userIdExists(Itinerary), destroy)

module.exports = router