const mongoose = require('mongoose');
var Movie = mongoose.model('Movie');
module.exports = {
    index:(req,res)=>{
        Movie.find({}, (err,movie)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(movie);
             }
        });
    },
    create:(req,res)=>{
        Movie.create(req.body, (err,movie)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(movie);
            }
        });
    },
    show:(req,res)=>{
        Movie.findOne({_id:req.params.id}, (err,movie)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(movie);
            }
        })
    },
    new:(req,res)=>{
        Movie.findOneAndUpdate({_id: req.params.id}, {$push: {name:req.body.name, rating:req.body.rating, comment:req.body.comment}
        }, (err,comment)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(comment);
            }
        });
    },
    showRate:(req,res)=>{
        Movie.findOne({_id:req.params.id}, (err,comment)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(comment);
            }
        })
    },
    delete:(req,res)=>{
        Movie.remove({_id:req.params.id}, (err,movie)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(movie);
            }
        });
    },
    deleteComment:(req,res)=>{
        Movie.update({name:req.params.name},{$pull: {name:req.params.name, rating:req.params.rating, comment:req.params.comment}
        }, (err,movie)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(movie);
            }
        });
    },
}