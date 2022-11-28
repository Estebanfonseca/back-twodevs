let router = require('express').Router()
let validator = require('../middlewares/validator')
let schema = require('../schemas/newItinerary')
let {create, read, update, destroy} = require('../controllers/itineraries')

router.post('/', validator(schema), create)
router.get('/', read)
router.get('/:id', read)
router.put('/:id', validator(schema), update)
router.delete('/:id', destroy)

module.exports = router