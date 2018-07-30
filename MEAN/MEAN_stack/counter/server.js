var express = require("express");
var session = require('express-session');
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
// more new code:
app.use(session({
  secret: 'pizzatomato',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.get('/', function(request, response) {
    if(request.session.count==null){
        request.session.count = 0;
    } else {
        request.session.count++ ;
    }
    response.render("index", {count:request.session.count});
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})