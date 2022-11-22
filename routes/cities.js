let router = require('express').Router()
let {create, read, update, destroy} = require('../controllers/cities')
let validator = require('../middlewares/validator')
let schema = require('../schemas/newCity')

router.post('/', validator(schema), create)
router.get('/', read)
router.get('/:id', read)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router;
