let router = require('express').Router()
let {create, read} = require('../controllers/cities')

router.post('/', create)
router.get('/', read)
router.get('/:id', read)

module.exports = router;
