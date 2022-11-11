let router = require('express').Router()
let usersRouter = require('./users')
let citiesRouter = require('./cities')
let hotelsRouter = require('./hotels')

router.use('/users', usersRouter)
router.use('/cities', citiesRouter)
router.use('/hotels', hotelsRouter)

module.exports = router;
