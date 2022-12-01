let router = require('express').Router()
let validator = require('../middlewares/validator')
let schemaAdmin = require('../schemas/newReaction')
let {create, read, update} = require('../controllers/reactions')
let passport = require('../config/passport')
let reactionExists = require('../middlewares/reactionExists')
const activityExists = require('../middlewares/activityExists')

router.get('/', read)
router.post('/', passport.authenticate('jwt',{session:false}), validator(schemaAdmin), activityExists, reactionExists, create)
router.put('/', passport.authenticate('jwt',{session:false}), update)

module.exports = router