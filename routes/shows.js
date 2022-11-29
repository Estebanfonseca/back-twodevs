let router = require('express').Router()
let passport = require('../config/passport')
let {create, update, destroy,read} = require('../controllers/shows')
let schema = require('../schemas/newShow')
const userIdExists = require('../middlewares/userIdExists')



router.post('/', passport.authenticate('jwt',{session:false}), create)
router.get('/', read)
router.patch('/:id', passport.authenticate('jwt',{session:false}), userIdExists(schema), update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), userIdExists(schema), destroy)



module.exports = router