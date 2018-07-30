const mongoose = require('mongoose');
var Player = mongoose.model('Player');
module.exports = {
    index:(req,res)=>{
        Player.find({}, (err,task)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(player);
             }
        });
    },
    new:(req,res)=>{
        Player.create(req.body, (err,player)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(player);
            }
        });
    },
    delete:(req,res)=>{
        Player.remove({_id:req.params.id}, (err,player)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(player);
            }
        });
    }
}