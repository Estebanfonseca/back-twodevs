let router = require('express').Router()
let usersRouter = require('./users')

router.use('/api/users', usersRouter)

module.exports = router;
