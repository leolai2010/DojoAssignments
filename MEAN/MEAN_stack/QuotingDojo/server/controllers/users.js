const mongoose = require('mongoose');
var User = mongoose.model('User')
module.exports = {
    index: function(req, res) {
        User.find({}).sort({createdAt: 'descending'}).exec(function(err, users) {
            res.render('index', {users: users});
        });
    },
    create: function(req, res) {
        var user = new User({name: req.body.name, quote: req.body.quote});
        user.save(function(err) {
            if(err) {
            console.log('something went wrong', err);
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
            } else { 
            console.log('successfully added a user!');
            res.redirect('/');
            }
        })
    }
};