let router = require('express').Router()
let {create,read,update,destroy} = require('../controllers/hotels')
let schema = require('../schemas/newHotel')
let validator = require('../middlewares/validator')
let passport = require('../config/passport')
const hotelUserIdExists = require('../middlewares/hotelUserIdExists')


router.post('/',validator(schema), passport.authenticate('jwt',{session:false}), create)
router.get('/',read)
router.get('/:id',read)
router.patch('/:id',validator(schema), passport.authenticate('jwt',{session:false}), hotelUserIdExists, update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), hotelUserIdExists, destroy)

module.exports = router