let router = require('express').Router()
let {create,read,update,destroy} = require('../controllers/hotels')
let schema = require('../schemas/newHotel')
let validator = require('../middlewares/validator')
let passport = require('../config/passport')
const userIdExists = require('../middlewares/userIdExists')
let Hotel = require('../models/Hotel')


router.post('/', passport.authenticate('jwt',{session:false}), validator(schema), create)
router.get('/',read)
router.get('/:id',read)
router.patch('/:id', passport.authenticate('jwt',{session:false}), validator(schema), userIdExists(Hotel), update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), userIdExists(Hotel), destroy)

module.exports = router