let router = require('express').Router()
let usersRouter = require('./users')
let citiesRouter = require('./cities')

router.use('/api/users', usersRouter)
router.use('/api/cities', citiesRouter)

module.exports = router;
