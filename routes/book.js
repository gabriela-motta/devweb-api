
var express = require('express');
var router = express.Router();

var bookController = require('../controllers/book');

/**
 * @swagger
 * path: /api/book
 * operations:
 *   -  httpMethod: GET
 *      summary: Get all books
 *      notes: Returns all books
 *      responseClass: Book
 *      nickname: books
 *      consumes:
 *        - application/json
 */
router.get('/', bookController.index);

/**
 * @swagger
 * path: /api/book/:book_id
 * operations:
 *   -  httpMethod: GET
 *      summary: Get book from id
 *      notes: Returns one book
 *      responseClass: Book
 *      nickname: book
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: book_id
 *          description: Book id
 *          paramType: query
 *          required: true
 *          dataType: string
 */
router.get('/:book_id', bookController.show);

/**
 * @swagger
 * path: /api/book/
 * operations:
 *   -  httpMethod: POST
 *      summary: Create book
 *      notes: Creates a new book
 *      responseClass: Book
 *      nickname: create_book
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: title
 *          description: Book title
 *          paramType: query
 *          required: true
 *          dataType: string
 *        - name: author
 *          description: Book author
 *          paramType: query
 *          required: true
 *          dataType: Author
 */
router.post('/', bookController.create);

/**
 * @swagger
 * path: /api/book/:book_id
 * operations:
 *   -  httpMethod: PUT
 *      summary: Update book
 *      notes: Updates book informations
 *      responseClass: Book
 *      nickname: update_book
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: book_id
 *          description: Book id
 *          paramType: query
 *          required: true
 *          dataType: string
 */
router.put('/:book_id', bookController.update);

router.delete('/:book_id', bookController.delete);

module.exports = router;
