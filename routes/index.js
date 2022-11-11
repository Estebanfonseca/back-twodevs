let router = require('express').Router()
let usersRouter = require('./users')
let citiesRouter = require('./cities')
let hotelsRouter = require('./hotels')
let showsRouter = require('./shows')

router.use('/users', usersRouter)
router.use('/cities', citiesRouter)
router.use('/hotels', hotelsRouter)
router.use('/shows' ,showsRouter)

module.exports = router;
