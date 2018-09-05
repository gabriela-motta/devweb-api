const express = require('express');
const morgan = require('morgan');
const path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var bcrypt = require('bcryptjs');
const PORT = process.env.PORT || 3000;
var config = require('./config/db.js')

const app = express();

mongoose.connect(config.local_url, { useNewUrlParser: true });

app.use(morgan('dev'));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Example app listening on port 3000!'));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Basic routes
app.get('/', function(req, res) {
    res.send('Get request');
});

app.post('/', function(req, res) {
    res.send('Post request');
});

app.put('/', function(req, res) {
    res.send('Put request');
});

app.delete('/', function(req, res) {
    res.send('Delete request');
});

var bookRoutes = require('./routes/book');
app.use('/book', bookRoutes);

var authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

var userRoutes = require('./routes/user');
app.use('/user', userRoutes);

module.exports = app;
