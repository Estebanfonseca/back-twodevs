let router = require('express').Router()
let passport = require('../config/passport')
let {create, update, destroy,read} = require('../controllers/shows')
const showUserIdExists = require('../middlewares/showUserIdExists')
let validator = require('../middlewares/validator')
let schema = require('../schemas/show')


router.post('/', passport.authenticate('jwt',{session:false}), create)
router.get('/', read)
router.patch('/:id',validator(schema), passport.authenticate('jwt',{session:false}), showUserIdExists, update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), showUserIdExists, destroy)



module.exports = router