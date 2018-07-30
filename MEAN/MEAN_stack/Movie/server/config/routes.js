var Movie = require('../controllers/movies.js');
module.exports = (app)=>{
    app.get('/movies', (req,res)=>{
        Movie.index(req,res);
    });
    app.post('/new/movie/', (req,res)=>{
        Movie.create(req,res);
    });
    app.get('/show/movie/:id', (req,res)=>{
        Movie.show(req,res);
    });
    app.post('/rate/comment/', (req,res)=>{
        Movie.main(req,res);
    });
    app.post('/new/comment/:id', (req,res)=>{
        Movie.new(req,res);
    });
    app.get('/show/comment/:id', (req,res)=>{
        Movie.showRate(req,res);
    });
    app.get('/delete/movie/:id', (req,res)=>{
        Movie.delete(req,res);
    });
    app.get('/delete/comment/:name', (req,res)=>{
        Movie.deleteComment(req,res);
    });
}