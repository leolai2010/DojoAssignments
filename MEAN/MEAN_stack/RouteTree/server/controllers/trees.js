const mongoose = require('mongoose');
var Leaf = mongoose.model('Leaf');
var Flower = mongoose.model('Flower');
module.exports = {
    index:(req,res)=>{
        Leaf.find({}, (err,author)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(author);
             }
        });
        Flower.find({}, (err,author)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(author);
             }
        });
    },
    leafpage:(req,res)=>{
        Leaf.find({}, (err,author)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(author);
             }
        });
    },
    flowerpage:(req,res)=>{
        Flower.find({}, (err,author)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(author);
             }
        });
    }
}