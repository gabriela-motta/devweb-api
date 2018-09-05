var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    sinopsis: {
      type: String,
      required: false,
      default: "No information now, come back soon."
    },
    release_date: {
      type: Date,
      required: false
    },
    original_language: {
      type: String,
      required: false
    },
    quotes: {
      type: [String],
      default: [],
      required: false
    }
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
