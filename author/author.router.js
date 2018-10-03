var express = require('express');
var router = express.Router();

var authorController = require('./author.controller');

/**
 * @api {get} /api/author Get all Authors
 * @apiName GetAuthors
 * @apiGroup Author
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object[]} users All authors registred.
 * @apiSuccess {String} author.name  Name of the author.
 * @apiSuccess {Date} author.birthday  Birthday of the author.
 * @apiSuccess {String} author.country  Country of the author.
 * @apiSuccess {Object[]} author._books Books of the author.
 */
router.get('/', authorController.index);

/**
 * @api {get} /api/author/:id Get Author
 * @apiName GetAuthor
 * @apiGroup Author
 * @apiVersion 1.0.0
 *
 * @apiParam id Authors unique ID.
 *
 * @apiSuccess {String} author.name  Name of the author.
 * @apiSuccess {Date} author.birthday  Birthday of the author.
 * @apiSuccess {String} author.country  Country of the author.
 * @apiSuccess {Object[]} author._books Books of the author.
 */
router.get('/:author_id', authorController.show);

/**
 * @api {post} /api/author Create an Author
 * @apiName PostAuthor
 * @apiGroup Author
 * @apiVersion 1.0.0
 *
 * @apiParam name  Name of the author.
 * @apiParam [birthday]  Optional birthday of the author.
 * @apiParam [country] Optional country of the author.
 *
 * @apiSuccess {Object} result The operation result.
 * @apiSuccess {String} result.name  Name of the author.
 * @apiSuccess {String} result.birthday  Birthday of the author.
 * @apiSuccess {String} result.country  Country of the author.
 * @apiSuccess {String} msg Response message.
 */
router.post('/', authorController.create);

/**
 * @api {put} /api/author/:id Update Author
 * @apiName PutAuthor
 * @apiGroup Author
 * @apiVersion 1.0.0
 *
 * @apiParam [name]  Optional updated name field to the author.
 * @apiParam [birthday]  Optional updated birthday of the author.
 * @apiParam [country] Optional updated country of the author.
 *
 * @apiSuccess {Object} result The operation result.
 * @apiSuccess {String} result.name  Name of the author.
 * @apiSuccess {String} result.birthday  Birthday of the author.
 * @apiSuccess {String} result.country  Country of the author.
 * @apiSuccess {String} msg Response message.
 */
router.put('/:author_id', authorController.update);

/**
 * @api {delete} /api/author/:id Delete Author
 * @apiName DeleteAuthor
 * @apiGroup Author
 * @apiVersion 1.0.0
 *
 * @apiParam id Authors unique ID.
 *
 * @apiSuccess msg Response message.
 */
router.delete('/:author_id', authorController.delete);

module.exports = router;
