let router = require('express').Router()
let validator = require('../middlewares/validator')
let schemaAdmin = require('../schemas/newReaction')
let {create, read, update, destroy} = require('../controllers/reactions')
let passport = require('../config/passport')
let reactionExists = require('../middlewares/reactionExists')
const activityExists = require('../middlewares/activityExists')
const userIdAuthorized = require('../middlewares/userIdAuthorized')

router.get('/', read)
router.post('/', passport.authenticate('jwt',{session:false}), validator(schemaAdmin), activityExists, reactionExists, create)
router.put('/', passport.authenticate('jwt',{session:false}), update)
router.put('/:id', passport.authenticate('jwt',{session:false}), userIdAuthorized, destroy)

module.exports = router