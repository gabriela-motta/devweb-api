var Book = require('./book.model');
var RequestStatus = require('../constants/requestStatus');

exports.index = (req, res) => {
    Book.find({})
        .then((result) => {
            res.status(RequestStatus.OK).json(result);
        })
        .catch((err) => {
            res.status(RequestStatus.BAD_REQUEST).send(err);
        });
};

exports.show = (req, res) => {
    Book.findById(req.params.book_id)
        .then((user) => {
            res.status(RequestStatus.OK).json(user);
        })
        .catch((err) => {
            res.status(RequestStatus.BAD_REQUEST).json(err);
        });
};

exports.booksByAuthor = (req, res) => {
  let author_id = req.params.author_id;

  Book.find({ author: author_id })
      .then((result) => {
          res.status(RequestStatus.OK).json(result);
      })
      .catch((err) => {
          res.status(RequestStatus.BAD_REQUEST).send(err);
      });
};

exports.create = (req, res) => {
    var book = new Book(req.body);

    console.log(req.body);

    book.save()
        .then((createdBook) => {
            var res_json = {
                "message": "Book created",
                "book": createdBook
            };
            res.status(RequestStatus.OK).json(res_json);
        })
        .catch((err) => {
            res.status(RequestStatus.BAD_REQUEST).send(err);
        });
};

exports.update = (req, res) => {
    Book.updateOne({ _id: req.params.book_id }, { $set: req.body })
        .then(() => {
            res.status(RequestStatus.OK).send('Book updated!');
        })
        .catch((error) => {
            res.status(RequestStatus.BAD_REQUEST).json(error);
        });
};

exports.delete = (req, res) => {
    Book.deleteOne({ _id: req.params.book_id })
        .then(() => {
            res.status(RequestStatus.OK).send('Book deleted.');
        })
        .catch((error) => {
            res.status(RequestStatus.BAD_REQUEST).send(error);
        });
};
