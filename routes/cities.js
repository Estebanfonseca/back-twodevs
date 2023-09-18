let router = require('express').Router()
let {create, read, update, destroy} = require('../controllers/cities')
let validator = require('../middlewares/validator')
let schema = require('../schemas/newCity')
let passport = require('../config/passport')
const userIdExists = require('../middlewares/userIdExists')
let City = require('../models/City')

router.post('/', passport.authenticate('jwt',{session:false}), validator(schema), create)
router.get('/', read)
router.get('/:id', read)
router.put('/:id', passport.authenticate('jwt',{session:false}), validator(schema), userIdExists(City), update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), userIdExists(City), destroy)

module.exports = router;
