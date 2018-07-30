var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
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
app.get('/', function(req, res) {
    User.find({}, function(err, users) {
        res.render('index', {users: users});
    });
})
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err) {
        if(err) {
          console.log('something went wrong', err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        } else { 
          console.log('successfully added a user!');
          res.redirect('/');
        }
    })
})
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name: {type: String,  required: true, minlength: 3},
    age: {type: Number, required: true}
}, {timestamps: true})
mongoose.model('User', UserSchema); 
var User = mongoose.model('User');

app.listen(8000, function() {
    console.log("listening on port 8000");
})