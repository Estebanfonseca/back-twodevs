let router = require('express').Router()
let validator = require('../middlewares/validator')
let schema = require('../schemas/newItinerary')
let {create, read, update, destroy} = require('../controllers/itineraries')
let passport = require('../config/passport')
const userIdExists = require('../middlewares/userIdExists')

router.post('/', validator(schema), passport.authenticate('jwt',{session:false}), create)
router.get('/', read)
router.get('/:id', read)
router.put('/:id', validator(schema), passport.authenticate('jwt',{session:false}), userIdExists(schema), update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), userIdExists(schema), destroy)

module.exports = router