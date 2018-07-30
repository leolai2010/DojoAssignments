var Task = require('../controllers/authors.js');
module.exports = (app)=>{
    app.get('/authors', (req,res)=>{
        Task.index(req,res);
    });
    app.post('/new', (req,res)=>{
        Task.new(req,res);
    });
    app.get('/remove/:id', (req,res)=>{
        Task.delete(req,res);
    });
    app.get('/show/:id', (req,res)=>{
        Task.show(req,res);
    });
    app.post('/edit/:id', (req,res)=>{
        Task.edit(req,res);
    });
}