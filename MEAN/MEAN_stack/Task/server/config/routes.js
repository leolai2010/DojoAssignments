var Task = require('../controllers/tasks.js');
module.exports = (app)=>{
    app.get('/tasks', (req,res)=>{
        Task.index(req,res);
    });
    app.post('/new/task/', (req,res)=>{
        Task.new(req,res);
    });
    app.get('/remove/task/:id', (req,res)=>{
        Task.delete(req,res);
    });
    app.get('/show/task/:id', (req,res)=>{
        Task.show(req,res);
    });
    app.post('/edit/task/:id', (req,res)=>{
        Task.edit(req,res);
    });
}