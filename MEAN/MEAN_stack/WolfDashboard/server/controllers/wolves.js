const mongoose = require('mongoose');
var Wolf = mongoose.model('Wolf');
module.exports = {
    index:(req, res)=>{
        Wolf.find({}, function(err, wolf) {
            res.render('index', {wolf: wolf});
        });
    },
    new:(req, res)=>{
        res.render('new');
    },
    create:(req, res)=>{
        console.log("POST DATA", req.body);
        var wolf = new Wolf({name: req.body.name, gender: req.body.gender, size: req.body.size});
        wolf.save(function(err) {
            if(err) {
              console.log('something went wrong', err);
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/new');
            } else { 
              console.log('successfully added a wolf!');
              res.redirect('/');
            }
        });
    },
    edit:(req, res)=>{
        Wolf.findOne({_id:req.params.id}, function(err, wolf) {
            res.render('edit', {wolf: wolf});
        });
    },
    editing:(req, res)=>{
        var wolf = Wolf.find({_id:req.params.id});
        console.log(wolf);
        wolf.update({name:req.body.name,gender:req.body.gender,size:req.body.size}, function(err){
            if(err) {
              console.log('something went wrong', err);
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
            } else { 
              console.log('successfully updated a wolf!');
              res.redirect('/');
            }
        });
    },
    delete:(req, res)=>{
        Wolf.remove({_id:req.params.id}, function(err){
            res.redirect('/');
        });
    }
}