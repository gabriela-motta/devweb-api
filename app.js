const express = require('express');
const morgan = require('morgan');
const path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var passport = require('passport');
var session = require('express-session');
const swagger = require('swagger-express');
const app = express();
var MongoStore = require('connect-mongo')(session);

// config files
var db = require('./config/db');
var PORT = process.env.PORT || 3000;
var ENV = process.env.ENVIROMENT || 'development'

var db_url;
if (ENV == 'production') {
  db_url = db.url;
} else {
  db_url = db.local_url;
}

mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

// API documentation UI
app.use(swagger.init(app, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    basePath: 'http://localhost:3000',
    swaggerURL: '/api/swagger',
    swaggerJSON: '/api-docs.json',
    swaggerUI: './doc/swagger/',
    apis: ['./book/book.router.js']
}));

require('./config/passport')(passport);
app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 30 * 60 // = 30 minutos de sessão
  }),
  secret: process.env.SESSION_SECRET || 'local-secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('dev'));

app.use('/static', express.static(path.join(__dirname, 'public')));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

var bookRoutes = require('./book/book.router');
app.use('/api/book', bookRoutes);

var authRoutes = require('./user/auth.router');
app.use('/api/auth', authRoutes);

var userRoutes = require('./user/user.router');
app.use('/api/user', userRoutes);

var authorRoutes = require('./author/author.router');
app.use('/api/author', userRoutes);

app.listen(PORT, () => console.log('Example app listening on port 3000!'));

module.exports = app;
