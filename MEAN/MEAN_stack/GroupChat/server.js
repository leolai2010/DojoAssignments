var express = require("express");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
const server = app.listen(8000);
const io = require('socket.io')(server);
app.use(session({
  secret: 'pizzatomato',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.get('/', function(request, response) {
  response.render("index");
})
io.on('connection', function (socket) {
    socket.emit('username', {welcome: "Please Enter Your Name:"});
    socket.on('newuser', function(data){
        console.log(data.user + " has entered the chatroom");
        io.emit('updated_chatroom', {user:data.user})
    }); 
    socket.on('user_msg', function(data){
        console.log(data.msg + " message said by " + data.user);
        io.emit('updated_message', {msg:data.msg ,user:data.user})
    }); 
});