const mongoose = require('mongoose');
var Cake = mongoose.model('Cake');
var Comment = mongoose.model('Comment');
module.exports = {
    index:(req,res)=>{
        Cake.find({}, (err,cake)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(cake);
             }
        });
    },
    create:(req,res)=>{
        Cake.create(req.body, (err,cake)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(cake);
            }
        });
    },
    show:(req,res)=>{
        Cake.findOne({_id:req.params.id}, (err,cake)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(cake);
            }
        })
    },
    main:(req,res)=>{
        Comment.find({}, (err,comment)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(comment);
            }
        })
    },
    new:(req,res)=>{
        Cake.findOneAndUpdate({_id: req.params.id}, {$push: {comments:req.body}}, (err,comment)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(comment);
            }
        });
    },
    showRate:(req,res)=>{
        Cake.findOne({_id:req.params.id}, (err,comment)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(comment);
            }
        })
    },
}