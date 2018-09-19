const express = require('express');
const morgan = require('morgan');
const path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var bcrypt = require('bcryptjs');
const PORT = process.env.PORT || 3000;
var config = require('./config/db.js')
var swagger = require('swagger-express');

const app = express();

mongoose.connect(config.local_url, { useNewUrlParser: true });

app.use(swagger.init(app, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    basePath: 'http://localhost:3000',
    swaggerURL: '/api/swagger',
    swaggerJSON: '/api-docs.json',
    swaggerUI: './doc/swagger/',
    apis: ['./book/book.router.js']
  }));

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

var bookRoutes = require('./book/book.router.js');
app.use('api/book', bookRoutes);

var authRoutes = require('./user/auth.router.js');
app.use('api/auth', authRoutes);

var userRoutes = require('./user/user.router.js');
app.use('api/user', userRoutes);

var authorRoutes = require('./author/author.router.js');
app.use('api/author', userRoutes);

module.exports = app;
