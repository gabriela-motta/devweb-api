
var express = require('express');
var router = express.Router();

var bookController = require('../controllers/book');

router.get('/', bookController.index);

router.get('/:book_id', bookController.show);

router.post('/', bookController.create);

router.put('/:book_id', bookController.update);

router.delete('/:book_id', bookController.delete);

module.exports = router;
