let router = require('express').Router()
const accountExistSignUp = require('../middlewares/accountExistsSignUp')
let validator = require('../middlewares/validator')
let schemaSignUp = require('../schemas/userSignUp')
let schemaSignIn = require('../schemas/sign-in')
let {signUp, verify,sign_in,singInByToken, signOut} = require('../controllers/users')
let passport = require('../config/passport')
let accountExistSignIn = require('../middlewares/accountExistsSignIn')
let verifyAccount = require('../middlewares/accountHasBeenVerified')
let mustSignIn = require('../middlewares/mustSignIn')

router.post('/sign-up', validator(schemaSignUp), accountExistSignUp, signUp)
router.get('/verify/:code', verify)
router.post('/sign-in',validator(schemaSignIn), accountExistSignIn,verifyAccount,sign_in)
router.post('/token',passport.authenticate('jwt',{session:false}),mustSignIn,singInByToken)
router.post('/sign-out', passport.authenticate('jwt', {session:false}), signOut)

module.exports = router;