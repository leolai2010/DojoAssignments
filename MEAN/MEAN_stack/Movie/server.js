var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var path = require('path');
app.use(express.static( __dirname + '/public/dist/public' ));
require('./server/config/mongoose.js');
require('./server/models/Movie.js')
require('./server/config/routes.js')(app)
require('./server/controllers/movies.js')
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
app.listen(8080, function() {
    console.log("listening on port 8080");
})