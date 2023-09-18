let router = require('express').Router()
let usersRouter = require('./users')
let citiesRouter = require('./cities')
let hotelsRouter = require('./hotels')
let showsRouter = require('./shows')
let itinerariesRouter = require('./itineraries')
let comments = require('./comments')
let reactionsRouter = require('./reactions')

router.use('/auth', usersRouter)
router.use('/cities', citiesRouter)
router.use('/hotels', hotelsRouter)
router.use('/shows' ,showsRouter)
router.use('/itineraries', itinerariesRouter)
router.use('/comments', comments)
router.use('/reactions', reactionsRouter)


module.exports = router;
