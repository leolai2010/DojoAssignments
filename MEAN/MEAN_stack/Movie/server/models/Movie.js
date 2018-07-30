var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Movie title is required"], minlength: [3, "Must have 3 Characters"]},
    name: {type: [String], required: [true, "Name is required"], minlength: [3, "Must have 3 Characters"]},
    rating: {type: [Number], required: [true, "Rating is required"]},
    comment: {type: [String], required: [true, "Comment is required"]}
}, {timestamps: true})
mongoose.model('Movie', MovieSchema); 