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
app.post('/result', function(request, response){
  var name = request.body.firstname;
  var location = request.body.country;
  var language = request.body.language;
  var comment = request.body.subject;
  response.render("result", {name:name, location:location, language:language, comment:comment});
})
io.on('connection', function (socket) {
  socket.on('posting_form', function(data){
    console.log(data);
    socket.emit('updated_message',{ msg1:'You emitted the following information to the server:' + data.objectify.name
    }); 
    var number = 1 + Math.floor(Math.random() * 100);
    socket.emit('random_number', { msg2:'Your lucky number emitted by the server is' + number
    }); 
  }); 
});
