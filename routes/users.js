let router = require('express').Router()
let {create,sign_in} = require('../controllers/users')
let passport = require('../config/passport')

router.post('/', create)
router.post('/sign-in',sign_in)

module.exports = router;
