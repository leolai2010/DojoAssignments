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

mongoose.connect('mongodb://localhost/MessageBoard');
const CommentSchema = new mongoose.Schema({
    person: {type: String,  required: [true, "Name is required"], minlength: [3, "Must have 3 Characters"]},
    comment: {type: String, required: [true, "Comment is required"], minlength: [1, "Must have 1 Character"]}
}, {timestamps: true})
const MessageSchema = new mongoose.Schema({
    name: {type: String,  required: [true, "Name is required"], minlength: [3, "Must have 3 Characters"]},
    message: {type: String, required: [true, "Message is required"], minlength: [true, "Must have 1 Character"]},
    comments: [CommentSchema]
}, {timestamps: true})
mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

app.get('/', function(req, res) {
    Message.find({}, function(err, messages) {
        console.log(messages)
        res.render('index', {allmessages: messages});
    });
})
app.post('/newmessage', function(req, res) {
    var message = new Message({name: req.body.name, message: req.body.message});
    console.log(message);
    message.save(function(err) {
        if(err) {
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        } else { 
            console.log("Message Created");
            res.redirect('/');
        }
    });
})
app.post('/newcomment/:id', function(req, res) {
    var comment = new Comment({person: req.body.cname, comment: req.body.comment});
    comment.save(function(err) {
        if(err) {
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        } else {
            Message.findOneAndUpdate({_id:req.params.id}, {$push: {comments:comment}}, function(err) {
                if(err){
                    for(var key in err.errors){
                        req.flash('registration', err.errors[key].message);
                    }
                    res.redirect('/');
                } else {
                    console.log("Comment Created")
                    res.redirect('/');
                }
            })
        }
    });
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})