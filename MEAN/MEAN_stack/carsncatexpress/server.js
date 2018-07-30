var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get('/', function(request, response) {
    response.render("index");
})
app.get('/cars', function(request, response) {
    response.render("cars")
})
app.get('/cats', function(request, response) {
    response.render("cats");
})
app.get('/new', function(request, response) {
    response.render("new");
})
app.get('/cat1', function(request, response) {
    var piccat = "cat1"
    response.render("details", {cat:piccat});
})
app.get('/cat2', function(request, response) {
    var piccat = "cat2"
    response.render("details", {cat:piccat});
})
app.get('/cat3', function(request, response) {
    var piccat = "cat3"
    response.render("details", {cat:piccat});
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})