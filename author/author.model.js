var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    birthday: {
      type: Date,
      required: false
    },
    country: {
      type: String,
      required: false
    },
    _books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    image: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    }
});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
