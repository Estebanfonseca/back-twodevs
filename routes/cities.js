let router = require('express').Router()
let {create, read, update, destroy} = require('../controllers/cities')
let validator = require('../middlewares/validator')
let schema = require('../schemas/newCity')
let passport = require('../config/passport')
const cityUserIdExists = require('../middlewares/cityUserIdExists')

router.post('/', validator(schema), passport.authenticate('jwt',{session:false}), create)
router.get('/', read)
router.get('/:id', read)
router.put('/:id', validator(schema), passport.authenticate('jwt',{session:false}), cityUserIdExists, update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), cityUserIdExists, destroy)

module.exports = router;
