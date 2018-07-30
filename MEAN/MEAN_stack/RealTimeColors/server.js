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
    socket.on('button_green', function(data){
        data.color == "green";
        io.emit('updated_green', data); 
    }); 
    socket.on('button_blue', function(data){
        data.color == "blue";
        io.emit('updated_blue', data); 
    }); 
    socket.on('button_red', function(data){
        data.color == "red";
        io.emit('updated_red', data); 
    }); 
  });