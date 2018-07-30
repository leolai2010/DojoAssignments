var mongoose = require('mongoose');
var WolfSchema = new mongoose.Schema({
    name: {type: String,  required: [true, "Name is required"], minlength: [3, "Must have 3 Characters"]},
    gender: {type: String, required: true, minlength: 3},
    size: {type: String, required: true, minlength: 3}
}, {timestamps: true})
mongoose.model('Wolf', WolfSchema); 