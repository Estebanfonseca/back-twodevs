let router = require('express').Router()
const accountExistSignUp = require('../middlewares/accountExistsSignUp')
let validator = require('../middlewares/validator')
let schema = require('../schemas/userSignUp')
let {signUp, verify} = require('../controllers/users')

router.post('/sign-up', validator(schema), accountExistSignUp, signUp)
router.get('/verify/:code', verify)

module.exports = router;