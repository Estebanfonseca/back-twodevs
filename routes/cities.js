let router = require('express').Router()
let {create, read, update} = require('../controllers/cities')

router.post('/', create)
router.get('/', read)
router.get('/:id', read)
router.put('/:id', update)

module.exports = router;
