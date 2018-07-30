var Product = require('../controllers/products.js');
module.exports = (app)=>{
    app.get('/products', (req,res)=>{
        Product.index(req,res);
    });
    app.post('/new/product/', (req,res)=>{
        Product.new(req,res);
    });
    app.get('/delete/product/:id', (req,res)=>{
        Product.delete(req,res);
    });
    app.get('/show/product/:id', (req,res)=>{
        Product.show(req,res);
    });
    app.post('/edit/product/:id', (req,res)=>{
        Product.edit(req,res);
    });
}