var express = require('express');
var router = express.Router();
var RequestStatus = require('../constants/requestStatus');

var bookController = require('./book.controller');

function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        next();
    } else{
        res.status(RequestStatus.UNAUTHORIZED).send('User not logged.');
    }
}

/**
 * @api {get} /api/book Get all Books
 * @apiName GetBooks
 * @apiGroup Book
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object[]} books All books registred.
 * @apiSuccess {String} book.title  Title of the book.
 * @apiSuccess {String} book.sinopsis  Sinopsis of the book.
 * @apiSuccess {String} book.author  Author of the book.
 */
router.get('/', checkAuthentication, bookController.index);

/**
 * @api {get} /api/book/:id Get Book
 * @apiName GetBook
 * @apiGroup Book
 * @apiVersion 1.0.0
 *
 * @apiParam id Books unique ID.
 *
 * @apiSuccess {String} book.title  Title of the book.
 * @apiSuccess {String} book.sinopsis  Sinopsis of the book.
 * @apiSuccess {String} book.author  Author of the book.
 */
router.get('/:book_id', checkAuthentication, bookController.show);

/**
 * @api {post} /api/book Create a Book
 * @apiName PostBook
 * @apiGroup Book
 * @apiVersion 1.0.0
 *
 * @apiParam title  Title of the book.
 * @apiParam author  Author of the book.
 * @apiParam [sinopsis]  Optional sinopsis to the book.
 * @apiParam [quotes]  Optional quotes to the book.
 * @apiParam [release_date]  Optional release_date to the book.
 * @apiParam [original_language]  Optional original_language to the book.
 *
 * @apiSuccess {Object} result The operation result.
 * @apiSuccess {String} result.title  Title of the book.
 * @apiSuccess {String} result.sinopsis  Sinopsis of the book.
 * @apiSuccess {String} result.author  Author of the book.
 * @apiSuccess {Object} result.quotes  Quotes of the book.
 * @apiSuccess {Date} result.release_date  Release date of the book.
 * @apiSuccess {String} result.original_language  Original language of the book.
 * @apiSuccess {String} msg Response message.
 */
router.post('/', checkAuthentication, bookController.create);

/**
 * @api {put} /api/book/:id Update a Book
 * @apiName PutBook
 * @apiGroup Book
 * @apiVersion 1.0.0
 *
 * @apiParam [title]  Optional updated title field to the book.
 * @apiParam [sinopsis]  Optional updated sinopsis to the book.
 * @apiParam [author]  Optional updated author to the book.
 * @apiParam [release_date]  Optional updated release_date to the book.
 * @apiParam [original_language]  Optional updated original_language to the book.
 *
 * @apiSuccess {Object} result The operation result.
 * @apiSuccess {String} result.title  Title of the book.
 * @apiSuccess {String} result.sinopsis  Sinopsis of the book.
 * @apiSuccess {String} result.author  Author of the book.
 * @apiSuccess {Object} result.quotes  Quotes of the book.
 * @apiSuccess {Date} result.release_date  Release date of the book.
 * @apiSuccess {String} result.original_language  Original language of the book.
 * @apiSuccess {String} msg Response message.
 */
router.put('/:book_id', checkAuthentication, bookController.update);

/**
 * @api {delete} /api/book/:id Delete Book
 * @apiName DeleteBook
 * @apiGroup Book
 * @apiVersion 1.0.0
 *
 * @apiParam id Books unique ID.
 *
 * @apiSuccess msg Response message.
 */
router.delete('/:book_id', checkAuthentication, bookController.delete);

module.exports = router;
