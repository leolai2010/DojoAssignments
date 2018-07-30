var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
const flash = require('express-flash');
app.use(flash());
var session = require('express-session');
app.use(session({
  secret: 'pizzatomato',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
require('./server/config/mongoose.js');
require('./server/models/Wolf.js')
require('./server/config/routes.js')(app)
require('./server/controllers/wolves.js')
app.listen(8000, function() {
    console.log("listening on port 8000");
})