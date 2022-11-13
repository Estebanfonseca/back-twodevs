let router = require('express').Router()
let {create, read, update, destroy} = require('../controllers/cities')

router.post('/', create)
router.get('/', read)
router.get('/:id', read)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router;
