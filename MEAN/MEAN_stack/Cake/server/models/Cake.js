var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [3, "Must have 3 Characters"]},
    comment: {type: String, required: [true, "Comment is required"], minlength: [1, "Must have 1 Characters"]},
    rating: {type: String, required: [true, "Rating is required"]}
}, {timestamps: true})
var CakeSchema = new mongoose.Schema({
    baker: {type: String, required: [true, "Baker name is required"], minlength: [3, "Must have 3 Characters"]},
    imageurl: {type: String, required: [true, "Image link is required"]},
    comments: [CommentSchema]
}, {timestamps: true})
mongoose.model('Cake', CakeSchema); 
mongoose.model('Comment', CommentSchema);