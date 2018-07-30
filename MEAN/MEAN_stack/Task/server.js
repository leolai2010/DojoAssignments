var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
app.use(express.static( __dirname + '/public/dist/public' ));
require('./server/config/mongoose.js');
require('./server/models/Task.js')
require('./server/config/routes.js')(app)
require('./server/controllers/tasks.js')
app.listen(8000, function() {
    console.log("listening on port 8000");
})