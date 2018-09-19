var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var bcrypt = require('bcryptjs');
var config = require('./config/db.js')
var swagger = require('swagger-express');

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.ENVIROMENT || 'development'

var db_url;
if (ENV == 'production') {
  db_url = db.url;
} else {
  db_url = db.local_url;
}
mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

require('./config/passport')(passport);
app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 60 * 60 // = 60 minutos de sessão
  }),
  secret: process.env.SESSION_SECRET || 'local-secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

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

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var bookRoutes = require('./book/book.router');
app.use('api/book', bookRoutes);

var authRoutes = require('./user/auth.router');
app.use('api/auth', authRoutes);

var userRoutes = require('./user/user.router');
app.use('api/user', userRoutes);

var authorRoutes = require('./author/author.router');
app.use('api/author', userRoutes);

app.listen(PORT, () => console.log('Example app listening on port 3000!'));

module.exports = app;
