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
}));
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/RegNLog');
const UserSchema = new mongoose.Schema({
    email: {type: String, required:[true, 'Email is required'], unique:[true, "Email Already Exist!"]},
    name: {type: String,  required: [true, "Name is required"], minlength: [3, "Must have 3 Characters"]},
    password: {type: String,  required: [true, "Password is required"], minlength: [8, "Must have 8 Characters"]}
}, {timestamps: true});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', (req, res)=>{
    res.render('index');
});
app.get('/dashboard', (req,res)=>{
    res.render('dashboard');
});
app.post('/register', (req,res)=>{
    if(req.body.password != req.body.confpassword){
        req.flash('info','Password Do not Match!');
        res.redirect('/'); 
    } else if(req.body.password != ""){
        bcrypt.hash(req.body.password, 10, (err, hashed_password) =>{
            var user = new User({email: req.body.email, name: req.body.name, password:hashed_password})
            user.save((err)=>{
                console.log("Error encountered");
                if(err) {
                    for(var key in err.errors){
                        req.flash('info', err.errors[key].message);
                    }
                    res.redirect('/'); 
                } else {
                    console.log('User Created');
                    res.redirect('/');
                }
            });
        })
    }
    req.flash('info','Password is required');
    res.redirect('/');
});
app.post('/login',(req,res)=>{
    User.findOne({email: req.body.email}, (err,user)=> {
        if(!user){
            req.flash('info', "Invalid Email")
            return res.redirect('/');
        } else {
            bcrypt.compare(req.body.password, user.password, (err, result)=>{
                if(err){
                    for(var key in err.errors){
                        req.flash('info', err.errors[key].message);
                    }
                    res.redirect('/'); 
                } else if(result == false){
                    console.log("Wrong Password");
                    req.flash('info','Wrong Password');
                    res.redirect('/');
                } else if(result == true){
                    console.log("Login Successful");
                    req.session.id = user._id;
                    req.session.email = user.email;
                    res.redirect('/dashboard');
                }
            });
        }
    });
});
app.listen(8000, ()=>{
    console.log("listening on port 8000");
});