let router = require('express').Router()
let passport = require('../config/passport')
let {create, update, destroy,read} = require('../controllers/shows')
const showUserIdExists = require('../middlewares/showUserIdExists')


router.post('/', passport.authenticate('jwt',{session:false}), create)
router.get('/', read)
router.patch('/:id', passport.authenticate('jwt',{session:false}), showUserIdExists, update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), showUserIdExists, destroy)



module.exports = router