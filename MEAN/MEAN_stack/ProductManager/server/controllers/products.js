const mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = {
    index:(req,res)=>{
        Product.find({}, (err, product)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
             }
             else {
                res.json(product);
             }
        });
    },
    new:(req,res)=>{
        Product.create(req.body, (err, product)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(product);
            }
        });
    },
    delete:(req,res)=>{
        Product.remove({_id:req.params.id}, (err,product)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(product);
            }
        });
    },
    show:(req,res)=>{
        Product.findOne({_id:req.params.id}, (err, product)=>{
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(product);
            }
        })
    },
    edit:(req,res)=>{        
        Product.update({_id: req.body._id}, req.body, (err,data)=>{
            if(err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else { 
                res.json(data);
            }
        });
    },
}