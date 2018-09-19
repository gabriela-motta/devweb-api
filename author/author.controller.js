var Author = require('./author.model');
var RequestStatus = require('../constants/requestStatus');

exports.index = (req, res) => {
    Author.find({})
        .then((result) => {
            res.status(RequestStatus.OK).json(result);
        })
        .catch((err) => {
            res.status(RequestStatus.BAD_REQUEST).send(err);
        });
};

exports.show = (req, res) => {
    Author.findById(req.params.author_id)
        .then((user) => {
            res.status(RequestStatus.OK).json(user);
        })
        .catch((err) => {
            res.status(RequestStatus.BAD_REQUEST).json(err);
        });
};

exports.create = (req, res) => {
    var author = new Author(req.body);

    console.log(req.body);

    author.save()
        .catch((err) => {
            res.status(RequestStatus.BAD_REQUEST).send(err);
        })
        .then((createdAuthor) => {
            var res_json = {
                "message": "Author created",
                "data": {
                    "author": createdAuthor
                }
            };
            res.status(RequestStatus.OK).json(res_json);
        });
};

exports.update = (req, res) => {
    Author.updateOne({ _id: req.params.author_id }, { $set: req.body })
        .then(() => {
            res.status(RequestStatus.OK).send('Author updated!');
        })
        .catch((error) => {
            res.status(RequestStatus.BAD_REQUEST).json(error);
        });
};

exports.delete = (req, res) => {
    Author.deleteOne({ _id: req.params.author_id })
        .then(() => {
            res.status(RequestStatus.OK).send('Author deleted.');
        })
        .catch((error) => {
            res.status(RequestStatus.BAD_REQUEST).send(error);
        });
};
