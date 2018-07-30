const mongoose = require('mongoose');
var Task = mongoose.model('Task');
module.exports = {
    index:(req,res)=>{
        Task.find({}, (err,task)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(task);
             }
        });
    },
    new:(req,res)=>{
        Task.create(req.body, (err,task)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(task);
            }
        });
    },
    delete:(req,res)=>{
        Task.remove({_id:req.params.id}, (err,task)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(task);
            }
        });
    },
    show:(req,res)=>{
        Task.findOne({_id:req.params.id}, (err,task)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(task);
            }
        })
    },
    edit:(req,res)=>{        
        Task.update({_id: req.body._id}, req.body, (err,data)=>{
            if(err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else { 
                res.json(data);
            }
        });
    },
}