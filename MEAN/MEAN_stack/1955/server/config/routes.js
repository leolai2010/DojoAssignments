var Person = require('../controllers/people.js');
module.exports = (app)=>{
    app.get('/', (req,res)=>{
        Person.index(req,res);
    });
    app.get('/new/:name/', (req,res)=>{
        Person.new(req,res);
    });
    app.get('/remove/:name/', (req,res)=>{
        Person.delete(req,res);
    });
    app.get('/show/:name/', (req,res)=>{
        Person.show(req,res);
    });
}