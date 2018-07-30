var Wolf = require('../controllers/wolves.js');
module.exports = (app)=>{
    app.get('/', function(req, res) {
    Wolf.index(req,res);
    });   
    app.get('/new', function(req, res) {
        Wolf.new(req,res);
    });
    app.post('/wolf', function(req, res) {
        Wolf.create(req,res);
    });
    app.get('/edit/:id', function(req, res) {
        Wolf.editing(req,res);
    });
    app.post('/edit/:id', function(req, res){
        Wolf.editing(req,res);
    });
    app.get('/delete/:id', function(req, res) {
        Wolf.delete(req,res);
    });
}
