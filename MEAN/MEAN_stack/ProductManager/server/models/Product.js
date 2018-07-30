var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title is required"], minlength: [3, "Must have 3 Characters"]},
    price: {type: Number, required: [true, "Price is required"], minlength: [1, "Must have at least 1 Digit"]},
    imageurl: {type: String, required: [true, "Image link is required"]},
}, {timestamps: true})
mongoose.model('Product', ProductSchema); 