let router = require('express').Router()
let {create,read,update,destroy} = require('../controllers/comment')
let validator = require('../middlewares/validator')
let schema = require('../schemas/comment')
let passport = require('../config/passport')
let comment = require('../models/Comment')
let userExist = require('../middlewares/verifyUser')

router.get('/', read)
router.post('/',validator(schema),create)
router.put('/:id',passport.authenticate('jwt', {session:false}),userExist(comment), update)
router.delete('/:id',passport.authenticate('jwt', {session:false}),userExist(comment), destroy)


module.exports = router