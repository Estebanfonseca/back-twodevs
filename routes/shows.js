let router = require('express').Router()
let passport = require('../config/passport')
let {create, update, destroy,read} = require('../controllers/shows')
let schema = require('../schemas/newShow')
const userIdExists = require('../middlewares/userIdExists')
let validator = require('../middlewares/validator')
let Show = require('../models/Show')


router.post('/', passport.authenticate('jwt',{session:false}), validator(schema), create)
router.get('/', read)
router.patch('/:id', passport.authenticate('jwt',{session:false}), validator(schema), userIdExists(Show), update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), userIdExists(Show), destroy)



module.exports = router