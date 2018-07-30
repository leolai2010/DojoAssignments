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
var count = 0;
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
    socket.on('button_post', function(data){
        count += data;
        socket.emit('updated_message',{msg:count}); 
    }); 
    socket.on('button_reset', function(data){
        count = data;
        socket.emit('reset_message',{msg:count}); 
    }); 
  });