var Cake = require('../controllers/cakes.js');
var Comment = require('../controllers/cakes.js');
module.exports = (app)=>{
    app.get('/cakes', (req,res)=>{
        Cake.index(req,res);
    });
    app.post('/new/cake/', (req,res)=>{
        Cake.create(req,res);
    });
    app.get('/show/cake/:id', (req,res)=>{
        Cake.show(req,res);
    });
    app.post('/rate/comment/', (req,res)=>{
        Comment.main(req,res);
    });
    app.post('/new/comment/:id', (req,res)=>{
        Comment.new(req,res);
    });
    app.get('/show/comment/:id', (req,res)=>{
        Comment.showRate(req,res);
    });
}