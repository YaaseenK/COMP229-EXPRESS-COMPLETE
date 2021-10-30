// installed 3rd party packages
// Central file linking the site structure 
let createError = require('http-errors'); // default node.js installation
let express = require('express'); //Express package
let path = require('path'); // default node.js installation
let cookieParser = require('cookie-parser');
let logger = require('morgan'); //Logger

//  modules for authentication
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStratagy = passportLocal.Strategy;
let flash = require('connect-flash')


//  database setup
let mongoose = require('mongoose');
let DB = require('./db');

//	point mongoose to the DB URI
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error: '));
mongoDB.once('open', ()=>{
	console.log('Connected to MongoDB... ');
});

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let booksRouter = require('../routes/book')

// creates a new app called express abd set a referance to it in the 'app variable then ...
let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views')); // set path to views folder (joins) no mention required
app.set('view engine', 'ejs'); // express -e (configure view engine) adds the ejs syntex

//series of activations 
app.use(logger('dev')); // activates logger - track of dev system logger
app.use(express.json()); // data exchange (track of headers- )
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public'))); // anything in the public folder is a static rout.. it will be availble for everybody
app.use(express.static(path.join(__dirname, '../../node_modules')));

//setup express session
app.use(session({
  secret: "SomeSecret",
  saveUninitialized: false,
  resave: false
}));

// initialize flash
app.use(flash());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/book-list' , booksRouter);

// create a User Model Instance
let userModel = require('../models/user');
let User = userModel.User;

// implement a User Authentication Strategy
passport.use(User.createStrategy());

// serialize and deserialize the User info 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

module.exports = app;
