let router = require('express').Router()

let {create,read,update,destroy} = require('../controllers/hotels')


router.post('/', create)
router.get('/',read)
router.get('/:id',read)
router.patch('/:id',update)
router.delete('/:id',destroy)

module.exports = router