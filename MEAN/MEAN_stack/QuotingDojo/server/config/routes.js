var User = require('../controllers/users.js');
module.exports = function(app){
    app.get('/', function(req, res) {
        User.index(req,res);
    });
    app.post('/users', function(req, res) {
        User.create(req,res);
    });
};