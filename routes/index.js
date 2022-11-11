let router = require('express').Router()
let usersRouter = require('./users')
let citiesRouter = require('./cities')

router.use('/users', usersRouter)
router.use('/cities', citiesRouter)

module.exports = router;
