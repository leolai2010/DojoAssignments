const mongoose = require('mongoose');
var Person = mongoose.model('Person');
module.exports = {
    index:(req,res)=>{
        Person.find({}, (err,people)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json({message: "Success", data: people});
             }
        });
    },
    new:(req,res)=>{
        var person = new Person({name:req.params.name})
        person.save((err,people)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: people});
            }
        });
    },
    delete:(req,res)=>{
        Person.remove({_id:req.params.id}, (err,people)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: people});
            }
        });
    },
    show:(req,res)=>{
        Person.find({name:req.params.name}, (err,people)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: people});
            }
        })
    }
}