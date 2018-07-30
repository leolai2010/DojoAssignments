var Tree = require('../controllers/trees.js');
module.exports = (app)=>{
    app.get('/trees', (req,res)=>{
        Tree.index(req,res);
    });
    app.get('/leaf', (req,res)=>{
        Tree.leafpage(req,res);
    });
    app.get('/flower', (req,res)=>{
        Tree.flowerpage(req,res);
    });
    app.get('/show/leaf/:id', (req,res)=>{
        Tree.show(req,res);
    });
    app.get('/show/flower/:id', (req,res)=>{
        Tree.show(req,res);
    });
}