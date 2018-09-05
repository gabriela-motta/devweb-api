var express = require('express');
var router = express.Router();

var authorController = require('../controllers/author');

router.get('/', authorController.index);

router.get('/:author_id', authorController.show);

router.post('/', authorController.create);

router.put('/:author_id', authorController.update);

router.delete('/:author_id', authorController.delete);

module.exports = router;
