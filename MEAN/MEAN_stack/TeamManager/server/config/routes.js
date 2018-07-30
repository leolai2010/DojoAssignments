var Player = require('../controllers/players.js');
module.exports = (app)=>{
    app.get('/tasks', (req,res)=>{
        Player.index(req,res);
    });
    app.post('/new/player/', (req,res)=>{
        Player.new(req,res);
    });
    app.get('/remove/player/:id', (req,res)=>{
        Player.delete(req,res);
    });
    app.get('/show/player/:id', (req,res)=>{
        Player.show(req,res);
    });
    app.post('/edit/player/:id', (req,res)=>{
        Player.edit(req,res);
    });
}