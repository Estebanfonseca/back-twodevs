let router = require('express').Router()
let {create,read,update,destroy} = require('../controllers/hotels')
let schema = require('../schemas/newHotel')
let validator = require('../middlewares/validator')


router.post('/',validator(schema), create)
router.get('/',read)
router.get('/:id',read)
router.patch('/:id',update)
router.delete('/:id',destroy)

module.exports = router