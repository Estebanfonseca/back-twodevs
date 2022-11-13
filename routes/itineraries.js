let router = require('express').Router()

let {create, read} = require('../controllers/itineraries')

router.post('/', create)
router.get('/', read)

module.exports = router