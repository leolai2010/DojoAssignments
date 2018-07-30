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
app.get('/', function(req, res){
    res.render("index");
})
// array of all lines drawn
var line_history = [];
var recursive = function(){
    setTimeout(recursive,1000);
}
// event-handler for new incoming connections
io.on('connection', function (socket) {
    socket.emit('username', {welcome: "Please Enter Your Name:"});
    // first send the history to the new client
    for (var i in line_history) {
        socket.emit('draw_line', { line: line_history[i] } );
    }
    // add handler for message type "draw_line".
    socket.on('draw_line', function (data) {
        // add received line to history 
        line_history.push(data.line);
        // send line to all clients
        io.emit('draw_line', { line: data.line });
    });
    socket.on('newuser', function(data){
        console.log(data.user + " has entered the chatroom");
        io.emit('updated_chatroom', {user:data.user})
        }); 
        socket.on('user_msg', function(data){
        console.log(data.msg + " message said by " + data.user);
        io.emit('updated_message', {msg:data.msg ,user:data.user})
    }); 
    socket.on('clearit', function(){
        line_history = [];
        io.emit('clearit', true);
    });
});