const mongoose = require('mongoose');
var Author = mongoose.model('Author');
module.exports = {
    index:(req,res)=>{
        Author.find({}, (err,author)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(author);
             }
        });
    },
    new:(req,res)=>{
        Author.create(req.body, (err,author)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(author);
            }
        });
    },
    delete:(req,res)=>{
        Author.remove({_id:req.params.id}, (err,author)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(author);
            }
        });
    },
    show:(req,res)=>{
        Author.findOne({_id:req.params.id}, (err,author)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(author);
            }
        })
    },
    edit:(req,res)=>{        
        Author.update({_id: req.body._id}, req.body, (err,data)=>{
            if(err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else { 
                res.json(author);
            }
        });
    },
}